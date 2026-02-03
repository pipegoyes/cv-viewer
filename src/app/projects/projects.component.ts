import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Project } from '../../domain/person';
import { TagModule } from 'primeng/tag';
import { environment } from '../../environments/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnDestroy {
  projects: Project[] | undefined;
  till: string;

  private destroy$ = new Subject<void>();

  constructor(private personService: PersonService) {
    this.till = $localize`till`;
  }

  ngOnInit() {
    this.personService.getPerson(environment.person).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.projects = data.projects;

      this.projects!.forEach(p => {
        if (!p.endDate) {
          p.endDate = $localize`currently`
        }
      });
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
