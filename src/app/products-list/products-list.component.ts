import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Product } from '../shared/models/models';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.gerProducts().pipe(
      take(1),
      catchError((err) => {
        console.log(err);

        return of([]);
      })
    );
  }

  ngOnInit() {}

  public trackProduct(_: number, product: Product): number {
    return product.id;
  }
}
