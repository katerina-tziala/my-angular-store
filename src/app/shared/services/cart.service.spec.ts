import { TestBed } from '@angular/core/testing';
import { PRODUCTS } from 'src/test-utilities/mock-data';
import { CartService } from './cart.service';

describe('Service: Cart', () => {
  let cartService: CartService;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });

    cartService = TestBed.inject(CartService);
  });

  it('should have method getOrderItems$', () => {
    expect(cartService.getOrderItems$).toBeTruthy();
  });

  it('should have method getOrderItems', () => {
    expect(cartService.getOrderItems).toBeTruthy();
  });

  it('should have method addProductInCart', () => {
    expect(cartService.addProductInCart).toBeTruthy();
  });

  it('method addProductInCart should add a product in cart', () => {
    const product = PRODUCTS[0];
    cartService.addProductInCart(product);

    expect(cartService.getOrderItems()).toEqual([{ ...product, quantity: 1 }]);
  });

  it('should have method productInCart', () => {
    expect(cartService.productInCart).toBeTruthy();
  });

  it('method productInCart should return true when product in cart', () => {
    const product = PRODUCTS[0];
    expect(cartService.productInCart(product.id)).toBeTruthy();
  });

  it('method productInCart should return false when product not in cart', () => {
    expect(cartService.productInCart(333)).toBeFalsy();
  });

  it('should have method updateItem', () => {
    expect(cartService.updateItem).toBeTruthy();
  });

  it('method updateItem should correctly update the quantity of a product in cart', () => {
    const product = PRODUCTS[0];
    const orderItem = { ...product, quantity: 4 };
    cartService.updateItem(orderItem);
    expect(cartService.getOrderItems()).toEqual([{ ...orderItem }]);
  });

  it('should have method getNumberOfItemsInOrder', () => {
    expect(cartService.getNumberOfItemsInOrder).toBeTruthy();
  });

  it('method getNumberOfItemsInOrder should return correctly the number of the ordered items based on their quantity', () => {
    const orderItems = cartService.getOrderItems();
    expect(cartService.getNumberOfItemsInOrder(orderItems)).toEqual(4);
  });

  it('should have method getOrderTotal', () => {
    expect(cartService.getOrderTotal).toBeTruthy();
  });

  it('method getOrderTotal should return correctly the total amount of the order', () => {
    const product = PRODUCTS[0];
    const orderItems = cartService.getOrderItems();
    expect(cartService.getOrderTotal(orderItems)).toEqual(product.price * 4);
  });

  it('should have method getItemTotal', () => {
    expect(cartService.getItemTotal).toBeTruthy();
  });

  it('method getOrderTotal should return correctly the total amount of the ordered product', () => {
    const product = PRODUCTS[0];
    const orderItem = cartService.getOrderItems()[0];
    expect(cartService.getItemTotal(orderItem)).toEqual(product.price * 4);
  });

  it('should have method removeFromCart', () => {
    expect(cartService.removeFromCart).toBeTruthy();
  });

  it('method removeFromCart should remove correctly the product from the cart', () => {
    const product = PRODUCTS[0];
    cartService.removeFromCart(product.id);
    expect(cartService.getOrderItems().length).toEqual(0);
  });

  it('should have method emptyCart', () => {
    expect(cartService.emptyCart).toBeTruthy();
  });

  it('method emptyCart should remove all ordered produtcs from the cart', () => {
    const product = PRODUCTS[0];
    cartService.addProductInCart(product);
    cartService.emptyCart();
    expect(cartService.getOrderItems().length).toEqual(0);
  });
});
