import { Component } from '@angular/core';
import { Person } from '../../domain/person';
import { Observable } from 'rxjs';
import { PersonService } from '../person.service';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-side-bar',
  standalone: true,
  imports: [CommonModule, AvatarModule, ButtonModule, MenubarModule, MenuModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-side-bar.component.html',
  styleUrl: './menu-side-bar.component.css'
})
export class MenuSideBarComponent {
  person$!: Observable<Person>;
  sidebarVisible: boolean = false;
  experienceItems: MenuItem[] | undefined;
  projectItems: MenuItem[] | undefined;
  contactItems: MenuItem[] | undefined;
  appVersion: string = environment.appVersion;


  constructor(public personService: PersonService) {
    this.projectItems = [
      {
        label: $localize`Projects`,
        icon: 'pi pi-plus',
        routerLink: "/projects"
      },
      {
        label: $localize`Technologies`,
        icon: 'pi pi-plus',
        routerLink: "/techs"
      },
    ]
    this.experienceItems = [
      {
        label: $localize`Experience`,
        items: this.projectItems
      }]

  }

  ngOnInit() {
    this.person$ = this.personService.getPerson(environment.person);

    this.person$.subscribe(s => {
      var mobileLabel = $localize`Mobile ${s.phone}:menu_item_mobile:`;
      this.contactItems = [
        { label: s.location, icon: 'pi pi-home' },
        { label: s.email, icon: 'pi pi-envelope' },
        { label: mobileLabel, icon: 'pi pi-phone' }
      ]
    })
  }
}
