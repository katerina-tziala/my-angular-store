import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductRatingComponent } from './product-rating.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

describe('ProductRatingComponent', () => {
  let component: ProductRatingComponent;
  let fixture: ComponentFixture<ProductRatingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProductRatingComponent, RatingStarsComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ProductRatingComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a rating stars component', () => {
    fixture.detectChanges();
    const ratingStarsComponent = fixture.debugElement.query(
      By.directive(RatingStarsComponent)
    );
    expect(ratingStarsComponent).toBeTruthy();
  });

  it('should have a rating-value 0 and a rating-count 0 if rating is NOT defined', () => {
    fixture.detectChanges();

    const ratingValue = fixture.debugElement.query(By.css('.rating-value'));
    const ratingCount = fixture.debugElement.query(By.css('.rating-count'));

    expect(ratingValue)
      .withContext('Could not find the rating-value element')
      .toBeTruthy();
    expect(ratingValue.nativeElement.textContent.trim()).toBe('0.0');

    expect(ratingCount)
      .withContext('Could not find the rating-value element')
      .toBeTruthy();
    expect(ratingCount.nativeElement.textContent.trim()).toBe('(0)');
  });

  it('should display properly the rating data', () => {
    component.rating = { rate: 4.24, count: 212 };
    fixture.detectChanges();

    const ratingValue = fixture.debugElement.query(By.css('.rating-value'));
    const ratingCount = fixture.debugElement.query(By.css('.rating-count'));

    expect(ratingValue)
      .withContext('Could not find the rating-value element')
      .toBeTruthy();
    expect(ratingValue.nativeElement.textContent.trim()).toBe('4.2');

    expect(ratingCount)
      .withContext('Could not find the rating-value element')
      .toBeTruthy();
    expect(ratingCount.nativeElement.textContent.trim()).toBe('(212)');
  });
});
