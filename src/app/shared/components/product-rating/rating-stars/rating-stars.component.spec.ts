import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RatingStarsComponent } from './rating-stars.component';

describe('RatingStarsComponent', () => {
  let component: RatingStarsComponent;
  let fixture: ComponentFixture<RatingStarsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RatingStarsComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(RatingStarsComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 elements with rating-stars-container class', () => {
    fixture.detectChanges();

    const containers = fixture.debugElement.queryAll(
      By.css('.rating-stars-container')
    );
    expect(containers.length).toEqual(2);
  });

  it('should display rating percentage width to 0% when rating is not defined', () => {
    fixture.detectChanges();

    const percentageContainer = fixture.debugElement.query(
      By.css('.rating-percentage')
    );

    const percentageWidth =
      percentageContainer.nativeElement.getAttribute('style');

    expect(percentageContainer)
      .withContext('Could not find the rating-percentage element')
      .toBeTruthy();

    expect(percentageWidth).toEqual('width: 0%;');
  });

  it('should display rating percentage width to 50% when rating is 2.5', () => {
    component.rating = 2.5;
    fixture.detectChanges();

    const percentageContainer = fixture.debugElement.query(
      By.css('.rating-percentage')
    );

    const percentageWidth =
      percentageContainer.nativeElement.getAttribute('style');

    expect(percentageContainer)
      .withContext('Could not find the rating-percentage element')
      .toBeTruthy();

    expect(percentageWidth).toEqual('width: 50%;');
  });

  it('should display rating percentage width to 100% when rating > 5', () => {
    component.rating = 6;
    fixture.detectChanges();

    const percentageContainer = fixture.debugElement.query(
      By.css('.rating-percentage')
    );

    const percentageWidth =
      percentageContainer.nativeElement.getAttribute('style');

    expect(percentageContainer)
      .withContext('Could not find the rating-percentage element')
      .toBeTruthy();

    expect(percentageWidth).toEqual('width: 100%;');
  });
});
