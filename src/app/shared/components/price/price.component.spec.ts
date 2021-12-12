import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PriceComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(PriceComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display zero, when price NOT defined', () => {
    fixture.detectChanges();

    const priceText = fixture.debugElement.query(By.css('.price-text'));
    expect(priceText)
      .withContext('Could not find the price-text element')
      .toBeTruthy();
    expect(priceText.nativeElement.textContent.trim()).toBe('€0.00');
  });

  it('should display the price properly with the € sign in front', () => {
    component.price = 32.4;
    fixture.detectChanges();

    const priceText = fixture.debugElement.query(By.css('.price-text'));
    expect(priceText)
      .withContext('Could not find the price-text element')
      .toBeTruthy();
    expect(priceText.nativeElement.textContent.trim()).toBe('€32.40');
  });
});
