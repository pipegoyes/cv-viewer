import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { DownloadCvComponent } from './download-cv.component';
import { PersonService } from '../person.service';
import { Person } from '../../domain/person';

describe('DownloadCvComponent', () => {
  let component: DownloadCvComponent;
  let fixture: ComponentFixture<DownloadCvComponent>;

  const mockPerson: Partial<Person> = {
    name: 'Test Person'
  };

  const mockPersonService = {
    getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCvComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: PersonService, useValue: mockPersonService },
        { provide: LOCALE_ID, useValue: 'en-US' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build download filename with correct format', () => {
    const filename = component.buildDownloadFileName('John Doe');
    expect(filename).toMatch(/^JohnDoe-CV_en-US_\d{8}\.pdf$/);
  });

  it('should set pdfUrl based on environment and locale', () => {
    expect(component.pdfUrl).toContain('en-US.pdf');
  });
});
