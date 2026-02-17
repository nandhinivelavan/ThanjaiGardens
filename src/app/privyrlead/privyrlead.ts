import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-privyrlead',
  imports: [CommonModule, FormsModule, NgFor, MatIcon],
  templateUrl: './privyrlead.html',
  styleUrl: './privyrlead.css',
})
export class Privyrlead {

  tasks: Task[] = [
    { title: 'CONNECT FACEBOOK LEAD ADS', done: false },
    { title: 'CONNECT YOUR LEAD SOURCES', done: false },
    { title: 'SET YOUR DEFAULT SEQUENCE', done: false },
    { title: 'WHATSAPP AUTO-RESPONDER', done: false },
    { title: 'CREATE CUSTOM CLIENT FIELDS', done: false },
    { title: 'OPTIMISE YOUR META ADS', done: false },
    { title: 'INVITE YOUR TEAM MEMBERS', done: false },
    { title: 'SET UP LEAD ASSIGNMENT', done: false },
    { title: 'SEND A WHATSAPP CAMPAIGN', done: false }
  ];

  toggle(item: Task) {
    item.done = !item.done;
  }
   toggle_sort= false;
}


interface Task {
  title: string;
  done: boolean;
}



