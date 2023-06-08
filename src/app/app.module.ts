import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { ProductComponent } from './components/commerce/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports:
      [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  ngDoBootstrap() {}


  constructor(private injector: Injector) {
    const commerceProduct = createCustomElement(ProductComponent, {
      injector: this.injector
    });
    customElements.define("commerce-product", commerceProduct);
  }

}
