import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-details',
  imports: [NgClass,NgFor],
  templateUrl: './salary-details.html',
  styleUrl: './salary-details.css',
})
export class SalaryDetails {
users = [
    { name: 'Swetha', age: 30, balance: 2838, company: 'WIPRO', status: 'inactive' },
    { name: 'Thanvi', age: 39, balance: 3043, company: 'CALSOFT', status: 'active' },
    { name: 'Arul Kumar', age: 23, balance: 1796, company: 'MAHINDRA', status: 'active' },
    { name: 'Barani Dharan', age: 37, balance: 2850, company: 'CTS', status: 'inactive' },
    { name: 'Prathap', age: 26, balance: 3743, company: 'VEETECH', status: 'inactive' },
    { name: 'Thulasi', age: 34, balance: 3453, company: 'TCS', status: 'inactive' },
    { name: 'Ranjani', age: 20, balance: 3334, company: 'EQUITOX', status: 'inactive' },
    { name: 'Shiva Thamizhini', age: 37, balance: 3488, company: 'DBS', status: 'inactive' },
    { name: 'Sowndarya', age: 36, balance: 3786, company: 'VIRVA', status: 'active' },
    { name: 'Suganya', age: 33, balance: 3335, company: 'HDFC', status: 'inactive' }
  ];
}

  