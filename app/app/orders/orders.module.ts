import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OrdersModule { }
