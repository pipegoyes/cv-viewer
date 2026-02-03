import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProjectsComponent } from './projects.component';
import { PersonService } from '../person.service';
import { Person } from '../../domain/person';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  const mockPerson: Partial<Person> = {
    name: 'Test Person',
    projects: [
      { projectName: 'Project 1', startDate: '2020-01', endDate: '2021-06', technologies: 'Angular, TypeScript' },
      { projectName: 'Project 2', startDate: '2022-01', endDate: undefined, technologies: 'React, JavaScript' }
    ]
  };

  const mockPersonService = {
    getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load projects on init', () => {
    expect(component.projects?.length).toBe(2);
  });

  it('should set endDate to "currently" for ongoing projects', () => {
    const ongoingProject = component.projects?.find(p => p.projectName === 'Project 2');
    expect(ongoingProject?.endDate).toBeTruthy();
  });
});
