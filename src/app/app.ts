import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule";
import {TodoListComponent} from "./todo-list/todo-list";
import { SalaryDetails } from "./salary-details/salary-details";
import { TagCloudComponent } from "./tag-cloud/tag-cloud";  

@Component({
  selector: 'app-root',
  imports: [TagCloudComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ThanjaiGardens');
}



