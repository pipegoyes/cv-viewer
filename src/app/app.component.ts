import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api/menuitem';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { HomeComponent } from "./home/home.component";
import { Person } from '../domain/person';
import { PersonService } from './person.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuModule, CardModule, AvatarModule, HomeComponent, RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cv-viewer';
  sidebarVisible: boolean = false;
  expirenceItems: MenuItem[] | undefined;
  projectItems: MenuItem[] | undefined;
  contactItems: MenuItem[] | undefined;
  person$!: Observable<Person>;
  appVersion: string = environment.appVersion;

  constructor(public personService: PersonService){
    this.projectItems = [
      {
          label: $localize `Projects`,
          icon: 'pi pi-plus', 
          routerLink: "/projects"
      },
      {
        label: $localize `Technologies`,
        icon: 'pi pi-plus', 
        routerLink: "/techs"
    },
  ]
    this.expirenceItems = [
      {
          label: $localize `Experience`,
          items: this.projectItems
      }]

  }

  ngOnInit(){
     this.person$ = this.personService.getPerson(environment.person);

     this.person$.subscribe(s => {
      var mobileLabel = $localize `Mobile ${s.phone}:menu_item_mobile:`;
      this.contactItems = [
        { label: s.location, icon: 'pi pi-home' },
        { label: s.email, icon: 'pi pi-envelope' },
        { label: mobileLabel, icon: 'pi pi-phone' }
      ]
     })
  }

}
  