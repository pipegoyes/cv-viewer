import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TechsComponent } from './techs.component';
import { PersonService } from '../person.service';
import { Person } from '../../domain/person';

describe('TechsComponent', () => {
  let component: TechsComponent;
  let fixture: ComponentFixture<TechsComponent>;

  const mockPerson: Partial<Person> = {
    name: 'Test Person',
    frameworks: [
      { name: 'Angular', numberOfYearsExperience: 5 },
      { name: 'React', numberOfYearsExperience: 3 }
    ],
    tools: [
      { name: 'Git', numberOfYearsExperience: 8 },
      { name: 'Docker', numberOfYearsExperience: 4 }
    ]
  };

  const mockPersonService = {
    getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechsComponent],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and sort frameworks by experience descending', () => {
    expect(component.frameworks?.length).toBe(2);
    expect(component.frameworks?.[0].name).toBe('Angular');
    expect(component.frameworks?.[1].name).toBe('React');
  });

  it('should load and sort tools by experience descending', () => {
    expect(component.tools?.length).toBe(2);
    expect(component.tools?.[0].name).toBe('Git');
    expect(component.tools?.[1].name).toBe('Docker');
  });
});
