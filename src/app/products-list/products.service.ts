import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/models';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  public gerProducts(): Observable<Product[]> {
    const url = `${this.API}/products`;
    return this.http.get<Product[]>(url);
  }
}
