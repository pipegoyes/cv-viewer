import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MistralApiService {

  apiUrl = '/mistral';
  language;


  constructor(private http: HttpClient, @Inject(LOCALE_ID) public locale: string) {
    this.language = locale;
  }

  find(jobDescriptionText: string): Observable<any> {
    var language = this.language
    const body = { jobDescriptionText, language };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

}
