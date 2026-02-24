import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgFor ,NgStyle} from '@angular/common';
import { CommonModule } from '@angular/common';

interface LeadProperty {

  icon: string;
  iconBg: string;
  label: string;
  value: string;
  img?: string;
  class?: string;
  type?: string; // for special styles like status
}



interface Task {
  title: string;
  dueDate: string;
}


@Component({
  selector: 'app-leadinfo',
  imports: [MatIconModule,MatButtonModule,NgClass,NgFor,NgStyle,CommonModule],
  templateUrl: './leadinfo.html',
  styleUrl: './leadinfo.css',
})
export class Leadinfo implements OnInit {

 


  lead =[{
    name: 'Nandhini',
    id: '#LD-45879',
    mobile: '916374025862',
    status: 'New',
    lastActivity: 'Today, 01:00 PM',
    score: 20,
    isOnline: true,
    isFavorite: false
  },
{
    name: 'velavan',
    id: '#LD-45880',
    mobile: '916374025862',
    status: 'New',
    lastActivity: 'Today, 01:00 PM',
    score: 40,
    isOnline: true,
    isFavorite: false
  },
{
    name: 'Logu',
    id: '#LD-45881',
    mobile: '916374025862',
    status: 'New',
    lastActivity: 'Today, 01:00 PM',
    score: 60,
    isOnline: true,
    isFavorite: false
  },
{
    name: 'sumathi',
    id: '#LD-45882',
    mobile: '916374025862',
    status: 'New',
    lastActivity: 'Today, 01:00 PM',
    score: 80,
    isOnline: true,
    isFavorite: false
  }] ;

  circumference = 251; // approx half circle length
  dashOffset = 251;
  scoreLevel = 'Low';
  currentLead = this.lead[0];
  currentPosition=0;

  ngOnInit() {
    this.updateScore(this.currentLead.score);
  }

  updateScore(value: number) {
    const max = 100;
    const percent = value / max;
    this.dashOffset = this.circumference - (this.circumference * percent);

    if (value < 40) this.scoreLevel = 'Low';
    else if (value < 75) this.scoreLevel = 'Medium';
    else this.scoreLevel = 'High';
  }
  

  toggleFavorite() {
    this.currentLead.isFavorite = !this.currentLead.isFavorite;
  }

  callLead() {
    window.location.href = `tel:${this.currentLead.mobile}`;
  }

  goNext(){
    this.currentPosition = this.getCurrentPosition();
if(this.currentPosition < this.lead.length){
  this.currentPosition +=1;
  this.currentLead = this.lead[this.currentPosition];
  
}
this.updateScore(this.currentLead.score);
  }

    goPrevious(){
    this.currentPosition = this.getCurrentPosition();
if(this.currentPosition > 0){
  this.currentPosition -=1;
  this.currentLead = this.lead[this.currentPosition];
}
this.updateScore(this.currentLead.score);
  }

  getCurrentPosition(){
  let index=0;
   this.lead.forEach((lead,i) => {
   if( lead.id === this.currentLead.id)
   {
    index=i;
   }
    });
    return index;
  }
  openWhatsapp() {
    window.open(`https://wa.me/${this.currentLead.mobile}`, '_blank');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
  leadProperties: LeadProperty[] = [
    {
      icon: 'person',

      label: 'Owner',
      value: 'squareroupvillas@gmail.com',
      img: 'images/personalinfo/adduser.png',
      class: 'watsappClass',
      iconBg: ''
    },
    {
      icon: 'whatsapp',
      label: 'Lead Source',
      value: 'WhatsApp',
      img: 'images/privyr/leadinfo/watsapp.png',
      class: 'watsappClass',
      iconBg: ''
    },
    {
      icon: 'schedule',
      label: 'Lead Age',
      value: '1 Day Ago',
       img: 'images/privyr/leadinfo/lead.png',
      class: 'watsappClass',
      iconBg: ''
    },
    {
      icon: 'local_offer',
     
      label: 'Status',
      value: 'New',
      type: 'status',
       img: 'images/privyr/leadinfo/addmessage.png',
      class: 'watsappClass',
      iconBg: ''
    },
    {
      icon: 'event',
      label: 'Created On',
      value: '20 Feb 2026, 01:00:43 PM',
       img: 'images/privyr/leadinfo/created.png',
      class: 'watsappClass',
      iconBg: ''
    }
  ];

  showActions = false;

  leadActions = [
    'Edit Lead',
    'Change Status',
    'Assign Owner',
    'Delete Lead'
  ];

  addTask() {
    alert('Add Task Clicked!');
  }

  toggleActions() {
    this.showActions = !this.showActions;
  }

  performAction(action: string) {
    alert(action + ' clicked');
    this.showActions = false;
  }
  
}



