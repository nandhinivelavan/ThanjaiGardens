import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule";
import {TodoListComponent} from "./todo-list/todo-list";
import { SalaryDetails } from "./salary-details/salary-details";
import { TagCloudComponent } from "./tag-cloud/tag-cloud";
import { Personalinfo } from "./personalinfo/personalinfo";  
import { FormsModule } from '@angular/forms';
import { Privyrlead } from "./privyrlead/privyrlead";
// import { PrivyrleadComponent } from "./privyrlead/privyrlead";
import { MatIconModule } from '@angular/material/icon';
import { Capturelead } from "./capturelead/capturelead";

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatIconModule, Privyrlead],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ThanjaiGardens');
}






