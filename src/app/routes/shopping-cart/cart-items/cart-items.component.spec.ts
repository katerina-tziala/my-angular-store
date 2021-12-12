import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertMessageModule } from 'src/app/shared/components/alert-message/alert-message.module';
import { AlertMessageComponent } from 'src/app/shared/components/alert-message/alert-message.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CartItemsComponent } from './cart-items.component';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderItemComponent } from './order-item/order-item.component';
import { PRODUCTS } from 'src/test-utilities/mock-data';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          AlertMessageModule,
          OrderItemModule
        ],
        declarations: [
          CartItemsComponent,
          AlertMessageComponent,
          OrderItemComponent
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CartItemsComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert message when no order items provvided', () => {
    component.cartItems = [];
    fixture.detectChanges();

    const messageComponent = fixture.debugElement.query(
      By.directive(AlertMessageComponent)
    );

    expect(messageComponent).toBeTruthy();
    const message = messageComponent.query(By.css('.alert-message'));
    expect(message.nativeElement.textContent.trim()).toBe(
      'Your shopping cart is empty!'
    );
  });

  it('should display the products list', () => {
    const orderItems = PRODUCTS.map(product => ({ ...product, quantity: 1 }));
    component.cartItems = orderItems;
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('.cart-item'));

    expect(listItems).toBeTruthy();
    expect(listItems.length).toEqual(orderItems.length);
  });
});
