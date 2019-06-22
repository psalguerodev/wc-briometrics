import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-biometric',
  templateUrl: './biometric.component.html',
  styleUrls: ['./biometric.component.css']
})
export class BiometricComponent implements OnInit {

  @Input() documentNumber  = '70570294';
  @Output() evtSucess: EventEmitter<string> = new EventEmitter();

  isProcessing = false;
  color = 'warn';
  mode = 'indeterminate';
  value = 100;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
  }

  async invokeBiometric() {
    this.isProcessing = true;
    console.log('message');
    setTimeout(_ => {
      this.isProcessing = false;
      this.evtSucess.emit('success');
    }, 2000);
  }

}
