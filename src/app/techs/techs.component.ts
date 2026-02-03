import { Component, OnDestroy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonService } from '../person.service';
import { Framework } from '../../domain/person';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-techs',
  standalone: true,
  imports: [CommonModule, CardModule, ProgressBarModule],
  templateUrl: './techs.component.html',
  styleUrl: './techs.component.css'
})
export class TechsComponent implements OnDestroy {

  oneYearFactor: number = 8.3; // one year in percentage when 12 years are 100%

  frameworks : Framework[] | undefined;
  tools: Framework[] |undefined;

  private destroy$ = new Subject<void>();

  constructor(private personService : PersonService){

  }

  ngOnInit(){
    this.personService.getPerson(environment.person).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data =>{
      this.frameworks = data.frameworks?.sort((a,b) => this.sortDescending(a, b));
      this.tools = data.tools?.sort((a,b) => this.sortDescending(a,b))
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  sortDescending(a : Framework ,b :Framework){
    return b.numberOfYearsExperience! - a.numberOfYearsExperience!;
  }

}
