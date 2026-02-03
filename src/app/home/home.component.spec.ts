import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { PersonService } from '../person.service';
import { Person } from '../../domain/person';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockPerson: Partial<Person> = {
    name: 'Test Person',
    languages: [
      { name: 'English', numberOfYearsExperience: 10 },
      { name: 'German', numberOfYearsExperience: 5 }
    ],
    projectManagementMethodologies: [{ name: 'Agile' }],
    certifications: [{ name: 'AWS' }],
    headline: 'Software Developer',
    executiveSummary: 'Experienced developer'
  };

  const mockPersonService = {
    getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load languages on init', () => {
    expect(component.languages?.length).toBe(2);
    expect(component.maxLanguagesYear).toBe(10);
  });

  it('should load headline and summary', () => {
    expect(component.headline).toBe('Software Developer');
    expect(component.summary).toBe('Experienced developer');
  });
});
