import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersorderCreateComponent } from './ordersorder-create.component';

describe('OrdersorderCreateComponent', () => {
  let component: OrdersorderCreateComponent;
  let fixture: ComponentFixture<OrdersorderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersorderCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersorderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
