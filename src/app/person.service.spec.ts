import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'en-US' }
      ]
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch person data with correct URL', () => {
    const mockPerson = { name: 'Test Person', email: 'test@example.com' };

    service.getPerson('felipe').subscribe(person => {
      expect(person.name).toBe('Test Person');
    });

    const req = httpMock.expectOne('data/felipe_en-US.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockPerson);
  });
});
