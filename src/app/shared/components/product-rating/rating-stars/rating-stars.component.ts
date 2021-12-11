import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent {
  private MAX_STARS = 5;
  private PERCENTAGE_MULTIPLIER = 100 / this.MAX_STARS;
  @Input() public rating = 0;

  public get ratingPercentage(): number {
    const rating = Math.abs(this.rating);
    const valueToConvert = rating > this.MAX_STARS ? this.MAX_STARS : rating;
    const percentage = valueToConvert * this.PERCENTAGE_MULTIPLIER;
    return Math.round(percentage * 100) / 100;
  }
}
