import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

interface Client {
addedDaysAgo: any;
  id: number;
  name: string;
  description: string;
  addedDate: Date | undefined;
  group?: string;
  teamMember?: string;
}

@Component({
  selector: 'app-clientinfo',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './clientinfo.html',
  styleUrl: './clientinfo.css',
})

export class Clientinfo {
learnMore(arg0: string) {
throw new Error('Method not implemented.');
}
  isFabOpen: boolean | undefined;


  activeTab: string = 'all';
  searchText: string = '';
  
  showFilter = false;

  // Filter options
  sortOption: string = 'newest';
  maxDaysFilter: number | null = null;

  clients: Client[] = [
    {
      name: 'Privyr Support', description: 'WhatsApp support line.', addedDaysAgo: 6,
      id: 0,
      addedDate: undefined
    },
    {
      name: 'John Marketing', description: 'Facebook Lead.', addedDaysAgo: 2,
      id: 1,
      addedDate: undefined
    },
    {
      name: 'Website Lead', description: 'Website form.', addedDaysAgo: 10,
      id: 2,
      addedDate: undefined
    }
  ];

  get filteredClients() {
    let data = [...this.clients];

    // Search filter
    if (this.searchText) {
      data = data.filter(c =>
        c.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Days filter
    if (this.maxDaysFilter !== null) {
      data = data.filter(c => c.addedDaysAgo <= this.maxDaysFilter!);
    }

    // Sorting
    if (this.sortOption === 'newest') {
      data.sort((a, b) => a.addedDaysAgo - b.addedDaysAgo);
    } else {
      data.sort((a, b) => b.addedDaysAgo - a.addedDaysAgo);
    }

    return data;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    this.showFilter = false;
  }

  resetFilter() {
    this.sortOption = 'newest';
    this.maxDaysFilter = null;
    this.showFilter = false;

  }

  addClient() {
    const newClient: Client = {
      id: this.clients.length + 1,
      name: 'New Client ' + (this.clients.length + 1),
      description: 'Newly added client',
      addedDate: new Date(),
      group: 'General',
      teamMember: 'Unassigned',
      addedDaysAgo: 0
    };
    this.clients.unshift(newClient);
  }

  toggleFab() {
    this.isFabOpen = !this.isFabOpen;
  }

  closeFab = () => {
    this.isFabOpen = false;
  }

  quickAdd = () => {
    alert('Quick Add & Send Message');
    this.closeFab();
  }

  newContact = () => {
    alert('Enter a New Contact');
    this.closeFab();
  }

  importPhonebook = () => {
    alert('Import from Phonebook');
    this.closeFab();
  }

  moreOptions = () => {
    alert('More Import Options');
    this.closeFab();
  }

setTab(tab: any) {
  this.activeTab = tab;
}


}