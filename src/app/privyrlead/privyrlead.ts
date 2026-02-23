
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { Clientinfo } from "../clientinfo/clientinfo";
import { Actioninfo } from "../actioninfo/actioninfo";  
import { Capturelead } from '../capturelead/capturelead';
import { MatIcon } from "@angular/material/icon";


interface Task {
  title: string;
  done: boolean;
}
@Component({
  selector: 'app-privyrlead',
  imports: [CommonModule, FormsModule, NgFor, MatIcon, Capturelead, Clientinfo, Actioninfo],
  templateUrl: './privyrlead.html',
  styleUrl: './privyrlead.css',
})
export class Privyrlead {
activeTab: any = 'summary';
  setTab(tab: string) {
    this.activeTab = tab;
  }

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






