import { Component, Input } from '@angular/core';
import { Rating } from '../../../models/models';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent {
  @Input() public rating: Rating = { rate: 0, count: 0 };
}
