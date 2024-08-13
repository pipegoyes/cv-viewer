import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainInformationComponent } from './main-information/main-information.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api/menuitem';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainInformationComponent, SidebarModule, ButtonModule, MenuModule, CardModule, AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cv-viewer';
  sidebarVisible: boolean = false;
  expirenceItems: MenuItem[] | undefined;
  contactItems: MenuItem[] | undefined;

  constructor(){
    this.expirenceItems = [
      {
          label: 'Expirence',
          items: [
              {
                  label: 'Projects',
                  icon: 'pi pi-plus'
              },
              {
                  label: 'Technologies',
                  icon: 'pi pi-search'
              }
          ]
      }
    ]

    this.contactItems = [
      { label: 'Mainz / Frankfurt', icon: 'pi pi-home' },
      { label: 'f.goyes@bojsen.eu', icon: 'pi pi-envelope' },
      { label: 'Mobile: +49 163 249 5024', icon: 'pi pi-phone' }
  ];
  }

}
