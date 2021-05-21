import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersorderCreateComponent } from './ordersorder-create/ordersorder-create.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersorderCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
