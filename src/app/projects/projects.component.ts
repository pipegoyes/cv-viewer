import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Project } from '../../domain/person';
import { TagModule } from 'primeng/tag';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] | undefined;
  till: string;
  constructor(private personService: PersonService){
    this.till = $localize `till`;
  }

  ngOnInit(){
    this.personService.getPerson(environment.person).subscribe(data => {
      this.projects = data.projects;
    })
  }
}
