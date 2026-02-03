import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { JobMatcherComponent } from './job-matcher.component';
import { MistralApiService } from '../mistral-api.service';

describe('JobMatcherComponent', () => {
  let component: JobMatcherComponent;
  let fixture: ComponentFixture<JobMatcherComponent>;

  const mockMistralApiService = {
    find: jasmine.createSpy('find').and.returnValue(of({ outputs: [{ text: 'Match result' }] }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobMatcherComponent],
      providers: [
        { provide: MistralApiService, useValue: mockMistralApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear all fields', () => {
    component.jobDescriptionText = 'Some text';
    component.responseText = 'Some response';
    component.error = 'Some error';

    component.clear();

    expect(component.jobDescriptionText).toBe('');
    expect(component.responseText).toBe('');
    expect(component.error).toBe('');
  });
});
