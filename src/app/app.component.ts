import { Component } from '@angular/core';
import { Customer } from './interfaces/customer.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verify-footprint-wc';
  customer: Customer = {
    fullName: 'Patrick Salguero Avalos',
    documentNumber: '70570294',
    documentType: 'DNI'
  }

  handleProcess(event) {
    console.log(event);
  }
}
