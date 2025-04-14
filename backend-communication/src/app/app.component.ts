import { AsyncPipe, CommonModule } from '@angular/common';

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'
import { EmployeeComponent } from './employee/employee.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AsyncPipe, FormsModule,EmployeeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backend-communication';

}
