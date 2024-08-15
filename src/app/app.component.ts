import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuModule, CardModule, AvatarModule, HomeComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cv-viewer';
  sidebarVisible: boolean = false;
  expirenceItems: MenuItem[] | undefined;
  contactItems: MenuItem[] | undefined;
  person$!: Observable<Person>;

  constructor(public personService: PersonService){
    this.expirenceItems = [
      {
          label: 'Erfahrung',
          items: [
              {
                  label: 'Projekten',
                  icon: 'pi pi-plus', 
                  routerLink: "/projects"
              },
              // {
              //     label: 'Technologies',
              //     icon: 'pi pi-search'
              // }
          ]
      }
    ]
  }

  ngOnInit(){
     this.person$ = this.personService.getPerson("felipe", "DE");

     this.person$.subscribe(s => {
      this.contactItems = [
        { label: s.location, icon: 'pi pi-home' },
        { label: s.email, icon: 'pi pi-envelope' },
        { label: 'Mobile:'+ s.phone, icon: 'pi pi-phone' }
      ]
     })
  }

}
  