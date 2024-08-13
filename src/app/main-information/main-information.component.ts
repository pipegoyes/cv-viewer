import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { Employee } from './Employee';

@Component({
  selector: 'app-main-information',
  standalone: true,
  imports: [ImageModule, CommonModule],
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.css'
})
export class MainInformationComponent {
  employee! : Employee;

  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(){
    // TODO comment because of errors
    //  this.employeeService.getByName("felipe").subscribe(d => {
    //   this.employee =  d as Employee;
    //  });
  }
}