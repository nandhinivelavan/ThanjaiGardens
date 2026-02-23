import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Client {
  id: number;
  name: string;
  description: string;
  addedDate: Date;
  group?: string;
  teamMember?: string;
}

@Component({
  selector: 'app-privyrapp',
  imports: [CommonModule, FormsModule],
  templateUrl: './privyrapp.html',
  styleUrl: './privyrapp.css',
})


export class ClientsComponent {

  activeTab: string = 'all';
  searchText: string = '';

  clients: Client[] = [
    {
      id: 1,
      name: 'Privyr Support',
      description: 'Privyr support WhatsApp line.',
      addedDate: new Date(),
      group: 'Leads',
      teamMember: 'John'
    }
  ];

  get filteredClients() {
    return this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  addClient() {
    const newClient: Client = {
      id: this.clients.length + 1,
      name: 'New Client ' + (this.clients.length + 1),
      description: 'Newly added client',
      addedDate: new Date(),
      group: 'General',
      teamMember: 'Unassigned'
    };
    this.clients.unshift(newClient);
  }
}


