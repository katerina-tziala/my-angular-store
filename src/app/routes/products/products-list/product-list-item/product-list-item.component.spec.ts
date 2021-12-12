import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PriceComponent } from 'src/app/shared/components/price/price.component';
import { PriceModule } from 'src/app/shared/components/price/price.module';
import { ProductActionsComponent } from 'src/app/shared/components/product-actions/product-actions.component';
import { ProductActionsModule } from 'src/app/shared/components/product-actions/product-actions.module';
import { ProductInfoComponent } from 'src/app/shared/components/product-info/product-info.component';
import { ProductInfoModule } from 'src/app/shared/components/product-info/product-info.module';
import { ProductPhotoComponent } from 'src/app/shared/components/product-photo/product-photo.component';
import { ProductPhotoModule } from 'src/app/shared/components/product-photo/product-photo.module';
import { PRODUCTS } from 'src/test-utilities/mock-data';
import { ProductListItemComponent } from './product-list-item.component';

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          ProductPhotoModule,
          ProductInfoModule,
          PriceModule,
          ProductActionsModule
        ],
        declarations: [
          ProductListItemComponent,
          ProductPhotoComponent,
          ProductInfoComponent,
          PriceComponent,
          ProductActionsComponent,
          ProductPhotoComponent
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ProductListItemComponent);
          component = fixture.componentInstance;
          component.product = PRODUCTS[0];
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a product-photo component', () => {
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(
      By.directive(ProductPhotoComponent)
    );
    expect(childComponent).toBeTruthy();
  });

  it('should have a product-info component', () => {
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(
      By.directive(ProductInfoComponent)
    );
    expect(childComponent).toBeTruthy();
  });

  it('should have a price component', () => {
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(
      By.directive(PriceComponent)
    );
    expect(childComponent).toBeTruthy();
  });

  it('should have a product-actions component', () => {
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(
      By.directive(ProductActionsComponent)
    );
    expect(childComponent).toBeTruthy();
  });

  it('should have a correct link to the the product page', () => {
    const product = PRODUCTS[0];
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('.product-photo-link'));
 
    expect(link)
      .withContext('Could not find the title link element')
      .toBeTruthy();

    expect(link.nativeElement.getAttribute('href')).toBe(
      `/products/${product.id}`
    );
  });
});
