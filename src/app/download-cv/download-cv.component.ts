import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FileSaverModule } from 'ngx-filesaver';
import { ButtonModule } from 'primeng/button';
import { PersonService } from '../person.service';
import { environment } from '../../environments/environment';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-download-cv',
  standalone: true,
  imports: [ButtonModule, FileSaverModule, CommonModule],
  templateUrl: './download-cv.component.html',
  styleUrl: './download-cv.component.css',
  providers: [DatePipe]
})
export class DownloadCvComponent {
  pdfUrl: string | any;
  downloadFileName: string | any;

  constructor(public personService: PersonService, @Inject(LOCALE_ID) public locale: string, private datePipe: DatePipe) {
    this.pdfUrl = "data/" + environment.person + "_" + locale + ".pdf"
  }

  ngOnInit() {
    this.personService.getPerson(environment.person).subscribe(s => {
      this.downloadFileName = this.buildDownloadFileName(s.name!)
    })
  }

  buildDownloadFileName(name: string): string {
    let currentDate = this.datePipe.transform(new Date(), 'yyyyMMdd')
    return `${name!.replace(/\s/g, "")}-CV_${this.locale}_${currentDate}.pdf`
  }


  onDownloadError(event: any) {
    console.log("Error downloading", event)
  }
}
