import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
//import { ScrollingModule } from '@angular/cdk/scrolling';
//import { ViewportScroller } from '@angular/common'
//import { HttpModule } from '@angular/http';

import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
//import { RouterScroller } from '@angular/router/router';
// import { OverlayModule } from "@angular/cdk/overlay";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    VirtualScrollerModule
  ],
  entryComponents: [OrderItemsComponent], // porque se hizo esto ??xD
  providers: [OrderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
