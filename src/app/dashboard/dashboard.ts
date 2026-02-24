
import { NgClass } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Lead {
time: any;
  name: string;
  type: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule,NgClass,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
growthPercent: any;
filterLeads() {
throw new Error('Method not implemented.');
}


  leads: Lead[] = [];
  filteredLeads: Lead[] = [];

  searchText: string = '';
  selectedStatus: string = 'All';
  selectedDate: string | undefined;

  totalLeads = 484;
  todaysLeads = 0;
  untouchedLeads = 0;
  assignedLeads = 0;
  

  ngOnInit() {
    this.generateLeads();
    this.calculateStats();
    this.applyFilters();
  }

  ngOnChange() {

   this.applyFilters();
  }

  generateLeads() {
    this.leads = [
      {
        name: 'shivathamizhini', type: 'New Lead', status: 'Assigned', date: '2026-02-21',
        time: undefined
      },
      {
        name: 'Arun Kumar', type: 'New Lead', status: 'Untouched', date: '2026-02-24',
        time: undefined
      },
      {
        name: 'Divya R', type: 'Follow Up', status: 'Assigned', date: '2026-02-20',
        time: undefined
      },
      {
        name: 'Karthik S', type: 'New Lead', status: 'Untouched', date: '2026-02-23',
        time: undefined
      }
    ];
  }

  calculateStats() {
    const today = new Date().toDateString();

    this.totalLeads = this.leads.length;
    this.todaysLeads = this.leads.filter(l => l.date === today).length;
    this.untouchedLeads = this.leads.filter(l => l.status === 'Untouched').length;
    this.assignedLeads = this.leads.filter(l => l.status === 'Assigned').length;
  }

  applyFilters() {
    this.filteredLeads = this.leads.filter(lead => {

      const matchesSearch =
        lead.name.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' || lead.status === this.selectedStatus;

      const leadDate = lead.date;

      let matchesDate = true;

      
      if (this.selectedDate != undefined) {
        matchesDate = leadDate.includes(this.selectedDate);
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  }

  refresh() {
    this.searchText = '';
    this.selectedStatus = 'All';
    this.selectedDate = undefined;
    
  }

}