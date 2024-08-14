import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getPerson(name : string, language: string){
    var fileName = name + "_" + language + ".json";
    return this.httpClient.get<Person>("data/"+ fileName);
  }
}