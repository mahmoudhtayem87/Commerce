import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { ProductComponent } from './components/commerce/product/product.component';
import {FormsModule} from "@angular/forms";

import {ExampleComponent} from './components/example/example.component';
import { Example1Component } from './components/gs/example1/example1.component';
import { Example2Component } from './components/gs/example2/example2.component';
import { MapComponent } from './components/luca/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
      ExampleComponent,
      Example1Component,
      Example2Component,
      MapComponent
  ],
  imports:
      [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
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



    const exampleComponent = createCustomElement(ExampleComponent, {
          injector: this.injector
      });
      customElements.define("liferay-example", exampleComponent);


      const GSSampleElement = createCustomElement(Example1Component, {
          injector: this.injector
      });
      customElements.define("gs-sample", GSSampleElement);

      const GSSample2Element = createCustomElement(Example2Component, {
          injector: this.injector
      });
      customElements.define("gs-sample2", GSSample2Element);


      const Map = createCustomElement(MapComponent, {
          injector: this.injector
      });
      customElements.define("luca-map", Map);



  }

}
