import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/models';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API = 'https://fakestoreapi.com';
  private productsEndpoint = `${this.API}/products`;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsEndpoint);
  }

  public getProduct(id: number): Observable<Product> {
    const url = `${this.productsEndpoint}/${id}`;
    return this.http.get<Product>(url);
  }
}
