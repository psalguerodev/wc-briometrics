import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BiometricComponent } from './biometric/biometric.component';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

declare const customElements;

@NgModule({
  declarations: [
    AppComponent,
    BiometricComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent
  ],
  entryComponents: [
    BiometricComponent
  ]
})
export class AppModule {

  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    console.log('initialize spa - application web');
    const { injector } = this;
    const ngCustomElement = createCustomElement(BiometricComponent, { injector });
    customElements.define('wc-biometrics', ngCustomElement);
  }

}
