import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  imports: [NgForOf, NgClass],
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {

  comments = [
    {
      name: 'Alexander babu',
      message: 'The purchased products are not as per the quality standards.',
      status: 'pending',
      date: 'April 14, 2026',
      avatar: 'images/woman.png'
    },
    {
      name: 'Vetrivel Kandasamy',
      message: 'The items delivered are in good condition. Satisfied with the quality.',
      status: 'approved',
      date: 'April 16, 2026',
      avatar: 'images/man.png'
    },
    {
      name: 'Mohammed Rizwan',
      message: 'The delivery was delayed by two days. Not happy with the service.',
      status: 'rejected',
      date: 'April 20, 2026',
      avatar: 'images/boy.png'
    }
  ];

  tasks = [
    {
      title: 'Schedule meeting with Velavan',
      desc: 'The meeting is regarding the new project requirements...',
      date: '30 Jan 2026',
      tagClass: 'today',
      image: 'images/resort.png'
    },
    {
      title: 'Forward all tasks to Yazhini',
      desc: 'Forward certain tasks to Yazhini for further process...',
      date: '29 Jan 2026',
      tagClass: 'yesterday',
      image: 'images/surfing-board.png'
    },
    {
      title: 'Give Purchase report to',
      desc: 'Form a detailed purchase report of last month...',
      date: '31 Jan 2026',
      tagClass: 'tomorrow',
      image: 'images/beach.png'
    },
    {
      title: 'Book flight for holiday',
      desc: 'The flight has to be booked for the upcoming holidays...',
      date: '03 Feb 2026',
      tagClass: 'week',
      image: 'images/jetski.png'
    }
  ];

  getDayForDate(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    const tomorrow = new Date();
    const weekFromNow = new Date();

    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() + 1);
    weekFromNow.setDate(today.getDate() + 7);
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else if (date <= weekFromNow) {
      return 'In a week';
    } else {
      return 'later';
    }
  }
}

