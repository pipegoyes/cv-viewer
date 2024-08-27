import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Language, ProjectMethodologie } from '../../domain/person';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, CommonModule, ProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  languages: Language[] | any;
  projectMethodologies: ProjectMethodologie[] | any;
  certifications: string[] | any
  headline: string | undefined;
  summary: string |undefined;

  constructor(private personService : PersonService){
   
  }

  ngOnInit(){
    this.personService.getPerson("felipe", "DE").subscribe(data =>{
      this.languages = data.languages
      this.projectMethodologies = data.projectManagementMethodologies
      this.certifications = data.certifications
      this.headline = data.headline
      this.summary = data.executiveSummary
    })
  }
}
