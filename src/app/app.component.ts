import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { HomeComponent } from "./home/home.component";
import { MenuSideBarComponent } from "./menu-side-bar/menu-side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, MenuSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cv-viewer';
}
