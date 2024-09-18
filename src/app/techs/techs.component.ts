import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Framework } from '../../domain/person';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-techs',
  standalone: true,
  imports: [CommonModule, CardModule, ProgressBarModule],
  templateUrl: './techs.component.html',
  styleUrl: './techs.component.css'
})
export class TechsComponent {

  oneYearFactor: number = 8.3; // one year in percentage when 12 years are 100%

  frameworks : Framework[] | undefined;
  tools: Framework[] |undefined;

  constructor(private personService : PersonService){

  }

  ngOnInit(){
    this.personService.getPerson(environment.person).subscribe(data =>{
      this.frameworks = data.frameworks?.sort((a,b) => this.sortDescending(a, b));
      this.tools = data.tools?.sort((a,b) => this.sortDescending(a,b))
    })
  }

  sortDescending(a : Framework ,b :Framework){
    return b.numberOfYearsExperience! - a.numberOfYearsExperience!;
  }

}
