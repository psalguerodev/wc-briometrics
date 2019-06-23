import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BiometricComponent } from './biometric/biometric.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { ShopingcarComponent } from './shopingcar/shopingcar.component';

declare const customElements;

@NgModule({
  declarations: [
    AppComponent,
    BiometricComponent,
    ShopingcarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    BiometricComponent,
    ShopingcarComponent
  ]
})
export class AppModule {

  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    console.log('initialize spa - application web');
    const { injector } = this;
    const ngCustomElement = createCustomElement(BiometricComponent, { injector });
    const ngCustomElementCart = createCustomElement(ShopingcarComponent, { injector });
    customElements.define('wc-biometrics', ngCustomElement);
    customElements.define('wc-transaction-cart', ngCustomElementCart);
  }

}
