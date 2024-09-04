import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient, @Inject(LOCALE_ID) public locale: string) { }

  getPerson(name : string){
    var language = this.locale;
    var fileName = name + "_" + language + ".json";
    return this.httpClient.get<Person>("data/"+ fileName);
  }
}