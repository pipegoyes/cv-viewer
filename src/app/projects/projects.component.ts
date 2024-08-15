import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Project } from '../../domain/person';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] | undefined;
  constructor(private personService: PersonService){

  }

  ngOnInit(){
    this.personService.getPerson("felipe", "EN").subscribe(data => {
      this.projects = data.projects;
    })
  }
}
