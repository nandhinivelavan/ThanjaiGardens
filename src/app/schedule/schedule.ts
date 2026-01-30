import { Component } from '@angular/core';
import { NgIf, NgTemplateOutlet } from "@angular/common";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.html',
  imports: [NgTemplateOutlet, NgIf],
  styleUrls: ['./schedule.css']
})
export class ScheduleComponent {
  activeTab: 'today' | 'tomorrow' = 'today';

  showToday() {
    this.activeTab = 'today';
  }

  showTomorrow() {
    this.activeTab = 'tomorrow';
  }
}
