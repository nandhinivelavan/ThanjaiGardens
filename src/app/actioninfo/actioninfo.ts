import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-actioninfo',
  imports: [CommonModule, FormsModule, NgFor, MatIcon],
  templateUrl: './actioninfo.html',
  styleUrl: './actioninfo.css',
})
export class Actioninfo {
// ---------------- ACTIONS ----------------
actionText: string = '';
filterType: string = 'all';

actionsList: any[] = [];
activeTab: any;

addAction() {
  if (this.actionText.trim()) {
    this.actionsList.push({
      title: this.actionText,
      completed: false,
      date: new Date()
    });
    this.actionText = '';
  }
}

toggleAction(action: any) {
  action.completed = !action.completed;
}

deleteAction(index: number) {
  this.actionsList.splice(index, 1);
}

get filteredActions() {
  if (this.filterType === 'completed') {
    return this.actionsList.filter(a => a.completed);
  }
  if (this.filterType === 'pending') {
    return this.actionsList.filter(a => !a.completed);
  }
  return this.actionsList;
}

}
