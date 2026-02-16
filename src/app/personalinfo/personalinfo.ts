import { Component,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import{ signal } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './personalinfo.html',
  styleUrl: './personalinfo.css',
})
export class Personalinfo {



  clientName: string = '';
  mobileNumber: string = '';
  countryCode: string = '+91';

  leadSources: string[] = [
    'Privyr Lead Forms',
    'Facebook',
    'LinkedIn',
    'WordPress Websites',
    'WhatsApp Chats'
  ];
 leadsourcesImages: { [key: string]: string } = {
    'Privyr Lead Forms': '/images/personalinfo/infinity_18121031.png',
    'Facebook':'/images/personalinfo/facebook_2626269.png',
    'LinkedIn': '/images/personalinfo/linkedin_2626273.png',
    'WordPress Websites': '/images/personalinfo/letter-w_15366448.png',
    'WhatsApp Chats': '/images/personalinfo/whatsapp_3992601.png' 

  }
  selectedLeadSource: string = this.leadSources[0];

  savePersonalInfo() {
    // Logic to save personal information
    console.log('Personal Information Saved:');
    console.log('Client Name:', this.clientName);
    console.log('Mobile Number:', this.countryCode + ' ' + this.mobileNumber);
    console.log('Lead Source:', this.selectedLeadSource);
  }
  

}
