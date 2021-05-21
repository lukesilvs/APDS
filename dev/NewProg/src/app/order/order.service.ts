import{Order} from './order.model'
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs';

@Injectable({providedIn:'root'})
export class OrdersService
{
  private orders: Order []=[];
  private updateOrders= new Subject<Order[]>();
  getOrders()
  {
    return[...this.orders];
//allow orders-placed component to get placed orders
//...(spread operator) expands array into a set of items
  }

  getPostUpdateListener()
  {
    return this.updateOrders.asObservable();
  }
  addOrders(username: string, Email: string, PlacedOrder: string)
  {
    const order: Order={userName:username, Email:Email, PlacedOrder:
      PlacedOrder};
    this.orders.push(order);
    this.updateOrders.next([...this.orders])
  }
}
