import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule";
import {TodoListComponent} from "./todo-list/todo-list";  

@Component({
  selector: 'app-root',
  imports: [TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ThanjaiGardens');
}



