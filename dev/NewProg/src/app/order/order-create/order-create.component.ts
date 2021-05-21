import { Component, EventEmitter, Output } from '@angular/core';
import {Order} from '../order.model'
import {NgForm} from '@angular/forms'
import { OrdersService } from '../order.service';
//accepting a java object named Orderform from NgForm

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  enteredUserNameError='Please enter a user name in the correct format';
  enteredEmailError='Please Enter a correctly formatted e-mail address';
  enteredOrderError='Please enter an order of no more than 50 characters';
  enteredUserName='';
  enteredOrder='';
  enteredEmail='';

constructor(public orderService:OrdersService){}
  //inform android that orderCreated is an event that we would like to use to output
  OnAddOrder(OrderForm: NgForm){
    if(OrderForm.invalid)
    {
      return;
      //stop processing if invalid
    }

    this.orderService.addOrders(OrderForm.value.enteredUserName,OrderForm.value.enteredEmail
      ,OrderForm.value.enteredOrder)
    }
  }
