import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/models';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]>;
  private DUMMY: Product[] = [
    {
      id: 1,
      title: 'string',
      category: 'string',
      description: 'string',
      image: 'string',
      price: 12,
      rating: {
        count: 12,
        rate: 3.2,
      },
    },
    {
      id: 2,
      title: 'string',
      category: 'string',
      description: 'string',
      image: 'string',
      price: 23.6,
      rating: {
        count: 12,
        rate: 3.2,
      },
    },
    {
      id: 3,
      title: 'string',
      category: 'string',
      description: 'string',
      image: 'string',
      price: 125.55,
      rating: {
        count: 12,
        rate: 3.2,
      },
    },
    {
      id: 4,
      title: 'string',
      category: 'string',
      description: 'string',
      image: 'string',
      price: 12.76,
      rating: {
        count: 12,
        rate: 3.2,
      },
    },
    {
      id: 5,
      title: 'string',
      category: 'string',
      description: 'string',
      image: 'string',
      price: 12.5,
      rating: {
        count: 12,
        rate: 3.2,
      },
    },
  ];

  constructor(private productsService: ProductsService) {
    // this.products$ = of(this.DUMMY);
    //
    this.products$ = this.productsService.getProducts().pipe(
      take(1),
      catchError((err) => {
        console.log(err);

        return of([]);
      })
    );

    // this.products$ = of([]);
  }
  ngOnInit() {}
}
