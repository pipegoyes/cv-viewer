import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of } from 'rxjs';

import { MenuSideBarComponent } from './menu-side-bar.component';
import { PersonService } from '../person.service';
import { Person } from '../../domain/person';

describe('MenuSideBarComponent', () => {
  let component: MenuSideBarComponent;
  let fixture: ComponentFixture<MenuSideBarComponent>;

  const mockPerson: Partial<Person> = {
    name: 'Test Person',
    email: 'test@example.com',
    headline: 'Software Developer'
  };

  const mockPersonService = {
    getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSideBarComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        { provide: PersonService, useValue: mockPersonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have project menu items defined', () => {
    expect(component.projectItems?.length).toBeGreaterThan(0);
  });
});
