/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { Product } from '../models/models';
import { PRODUCTS } from 'src/test-utilities/mock-data';

describe('Service: ProductsService', () => {
  let productsService: ProductsService,
    httpTestingController: HttpTestingController;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    productsService = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should fetch all products', () => {
    productsService.getProducts().subscribe((products: Product[]) => {
      expect(products).toBeDefined();
      expect(products.length).toEqual(PRODUCTS.length);
    });

    const req = httpTestingController.expectOne(
      req => req.url == 'https://fakestoreapi.com/products'
    );
    req.flush(PRODUCTS);
  });

  it('should fetch a product by id', () => {
    productsService.getProduct(PRODUCTS[0].id).subscribe((product: Product) => {
      expect(product).toBe(PRODUCTS[0]);
    });

    const req = httpTestingController.expectOne(
      req => req.url == `https://fakestoreapi.com/products/${PRODUCTS[0].id}`
    );
    req.flush(PRODUCTS[0]);
  });
});
