import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGatewayRequest, ApiGatewayResponse } from '../domain/ApiGatewayResponse';

@Injectable({
  providedIn: 'root'
})
export class MistralApiService {

  apiUrl = '/mistral';
  language;


  constructor(private http: HttpClient, @Inject(LOCALE_ID) public locale: string) {
    this.language = locale;
  }

  find(jobDescriptionText: string): Observable<ApiGatewayResponse> {
    var language = this.language
    const body = { jobDescriptionText, language };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

}
