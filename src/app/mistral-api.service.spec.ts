import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LOCALE_ID } from '@angular/core';

import { MistralApiService } from './mistral-api.service';

describe('MistralApiService', () => {
  let service: MistralApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'en-US' }
      ]
    });
    service = TestBed.inject(MistralApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
