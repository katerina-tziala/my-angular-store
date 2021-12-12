import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { ProductRatingModule } from '../product-rating/product-rating.module';
import { ProductInfoComponent } from './product-info.component';
import { PRODUCTS } from '../../../../test-utilities/mock-data';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, ProductRatingModule],
        declarations: [ProductInfoComponent, ProductRatingComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ProductInfoComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT have a product-rating component when no product is passed', () => {
    fixture.detectChanges();
    const ratingComponent = fixture.debugElement.query(
      By.directive(ProductRatingComponent)
    );
    expect(ratingComponent).toBeFalsy();
  });

  it('should have  a product-rating component when product data is passed', () => {
    component.product = PRODUCTS[0];
    fixture.detectChanges();
    const ratingComponent = fixture.debugElement.query(
      By.directive(ProductRatingComponent)
    );
    expect(ratingComponent)
      .withContext('Could not find the ProductRatingComponent')
      .toBeTruthy();
  });

  it('should display the category correctly when product data is passed', () => {
    const product = PRODUCTS[0];
    component.product = product;
    fixture.detectChanges();
    const category = fixture.debugElement.query(By.css('.product-category'));

    expect(category)
      .withContext('Could not find the product-category element')
      .toBeTruthy();

    expect(category.nativeElement.textContent.trim()).toBe(product.category);
  });

  it('should display the title correctly when product data is passed', () => {
    const product = PRODUCTS[0];
    component.product = product;
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.product-title'));
    const titleLink = title.query(By.css('a'));

    expect(title)
      .withContext('Could not find the product-title element')
      .toBeTruthy();

    expect(titleLink)
      .withContext('Could not find the title link element')
      .toBeTruthy();

    expect(titleLink.nativeElement.textContent.trim()).toBe(product.title);
  });

  it('should have a correct link to the the product page', () => {
    const product = PRODUCTS[0];
    component.product = product;
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.product-title'));
    const titleLink = title.query(By.css('a'));

    expect(titleLink)
      .withContext('Could not find the title link element')
      .toBeTruthy();

    expect(titleLink.nativeElement.getAttribute('href')).toBe(
      `/products/${product.id}`
    );
  });
});
