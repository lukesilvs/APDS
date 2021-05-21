import { Component, OnInit, OnDestroy} from '@angular/core';
import {Order} from '../order.model';
import { Subscription } from 'rxjs';
import {OrdersService} from '../order.service'


@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit, OnDestroy
{


  orders: Order [] = [];
  constructor(public orderService: OrdersService){}
  private ordersSubscription: Subscription;

  ngOnInit(){

    this.orderService.getOrders();
    this.ordersSubscription= this.orderService.getPostUpdateListener()
    .subscribe((orders:Order[]) =>
    {
      this.orders=orders;
    });
  }

  ngOnDestroy(){
    this.ordersSubscription.unsubscribe();
  }
  //store inputed storedOrders array (app.compnent.ts)

}
