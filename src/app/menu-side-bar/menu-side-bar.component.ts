import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Person } from '../../domain/person';
import { Observable } from 'rxjs';
import { PersonService } from '../person.service';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FileSaverModule } from 'ngx-filesaver';

@Component({
  selector: 'app-menu-side-bar',
  standalone: true,
  imports: [CommonModule, AvatarModule, ButtonModule, MenubarModule, MenuModule, RouterLink, RouterLinkActive, FileSaverModule],
  templateUrl: './menu-side-bar.component.html',
  styleUrl: './menu-side-bar.component.css',
  providers: [DatePipe]
})
export class MenuSideBarComponent {
  person$!: Observable<Person>;
  sidebarVisible: boolean = false;
  experienceItems: MenuItem[] | undefined;
  projectItems: MenuItem[] | undefined;
  contactItems: MenuItem[] | undefined;
  appVersion: string = environment.appVersion;
  person: string = environment.person;
  pdfUrl: string | any;
  downloadFileName: string | any;


  constructor(public personService: PersonService, @Inject(LOCALE_ID) public locale: string, private datePipe: DatePipe) {
    this.pdfUrl = "/data/" + environment.person + "_" + locale + ".pdf"
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
      let currentDate = this.datePipe.transform(new Date(), 'yyyyMMdd')
      this.downloadFileName = `${s.name!.replace(/\s/g, "")}-CV_${this.locale}_${currentDate}.pdf`
    })
  }

  onDownloadError(event: any) {
    console.log("Error downloading", event)
  }
}
