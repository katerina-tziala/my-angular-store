import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Product } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  public product$: Observable<Product>;
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    const { id } = this.route.snapshot.params;
    this.product$ = this.productsService.getProduct(id).pipe(
      take(1),
      map((result) => {
        this.loading = false;
        return result;
      }),
      catchError((_) => {
        this.loading = false;
        return EMPTY;
      })
    );
  }
}
