/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrderItemActionsComponent } from './order-item-actions.component';

describe('CartComponent', () => {
  let component: OrderItemActionsComponent;
  let fixture: ComponentFixture<OrderItemActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderItemActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
