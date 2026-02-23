import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatIcon } from "@angular/material/icon"; 

interface Task {
  title: string;
  done: boolean;
}

interface Lead {
  name: string;
  phone: string;
  email: string;}

@Component({
  selector: 'app-capturelead',
  imports: [CommonModule, FormsModule, NgFor, MatIcon],
  templateUrl: './capturelead.html',
  styleUrl: './capturelead.css',
})

export class Capturelead {







  activeTab: string = 'capture';

  lead: Lead = {
    name: '',
    phone: '',
    email: ''
  };

  leadsList: Lead[] = [];

  // Regex Patterns
  phonePattern: RegExp = /^[0-9]{10}$/;
  emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Form Validation Getter
  get isFormValid(): boolean {
    const nameValid = this.lead.name.trim() !== '';
    const phoneValid = this.phonePattern.test(this.lead.phone);
    const emailValid =
      this.lead.email.trim() === '' ||
      this.emailPattern.test(this.lead.email);

    return nameValid && phoneValid && emailValid;
  }

  submitLead() {
    if (this.isFormValid) {
      this.leadsList.push({ ...this.lead });
      this.lead = { name: '', phone: '', email: '' };
      alert('Lead Saved Successfully!');
    }
  }
}
