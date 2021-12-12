import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CartIndicatorComponent } from './cart-indicator.component';
import { CartService } from '../../services/cart.service';
import { PRODUCTS } from '../../../../test-utilities/mock-data';

describe('CartIndicatorComponent', () => {
  let component: CartIndicatorComponent;
  let fixture: ComponentFixture<CartIndicatorComponent>;
  let cartService: CartService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BrowserModule, HttpClientModule, RouterTestingModule],
        declarations: [CartIndicatorComponent],
        providers: [{ provide: CartService }]
      })
        .compileComponents()
        .then(() => {
          cartService = TestBed.inject(CartService);

          fixture = TestBed.createComponent(CartIndicatorComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT display the indicator when cart is empty', () => {
    fixture.detectChanges();

    const numberOfItemsBadge = fixture.debugElement.query(
      By.css('.number-of-items')
    );
    expect(numberOfItemsBadge).toBeFalsy();
  });

  it('should display the indicator badge when items in cart', () => {
    cartService.addProductInCart(PRODUCTS[0]);
    fixture.detectChanges();

    const numberOfItemsBadge = fixture.debugElement.query(
      By.css('.number-of-items')
    );
    expect(numberOfItemsBadge).toBeTruthy();
    expect(numberOfItemsBadge.nativeElement.textContent.trim()).toBe('1');
  });

  it('should display a link to cart /shoppingcart', () => {
    fixture.detectChanges();

    const numberOfItemsBadge = fixture.debugElement.query(By.css('.cart-link'));
    expect(numberOfItemsBadge).toBeTruthy();
    expect(numberOfItemsBadge.nativeElement.getAttribute('href')).toBe(
      '/shoppingcart'
    );
  });
});
