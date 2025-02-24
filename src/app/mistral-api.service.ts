import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGatewayRequest, ApiGatewayResponse } from '../domain/ApiGatewayResponse';

@Injectable({
  providedIn: 'root'
})
export class MistralApiService {

  // todo move to env.
  private apiUrl = '/mistral';


  constructor(private http: HttpClient) { }

  find(jobDescriptionText: string): Observable<ApiGatewayResponse> {
    let request: ApiGatewayRequest = {
      body: jobDescriptionText
    }

    return this.http.post<ApiGatewayResponse>(this.apiUrl, request);
  }

}
