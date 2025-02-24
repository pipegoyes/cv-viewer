import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MistralApiService } from '../mistral-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-matcher',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule, FormsModule],
  templateUrl: './job-matcher.component.html',
  styleUrl: './job-matcher.component.css'
})
export class JobMatcherComponent {
  jobDescriptionText: string = "";
  responseText: string | undefined;
  error: string | undefined;
  apiService: MistralApiService | undefined;

  constructor(private MistralApiService: MistralApiService) {
    this.apiService = MistralApiService;
  }


  find() {
    if (this.jobDescriptionText) {
      this.apiService?.find(this.jobDescriptionText).subscribe(o => {
        this.responseText = o.outputs[0].text;
      }, error => {
        console.log(error)
        this.error = "Ups! Internal error occurs, please try it later";
      })
    } else {
      this.error = "Job description must be filled."
    }
  }

  clear() {
    this.responseText = "";
    this.jobDescriptionText = "";
    this.error = "";
  }
}
