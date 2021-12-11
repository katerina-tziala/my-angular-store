import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/models';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts().pipe(
      take(1),
      catchError((_) => of([]))
    );
  }
}
