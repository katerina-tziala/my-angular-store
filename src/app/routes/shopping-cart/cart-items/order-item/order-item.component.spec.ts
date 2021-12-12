import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderItemComponent } from './order-item.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { PriceComponent } from 'src/app/shared/components/price/price.component';
import { PriceModule } from 'src/app/shared/components/price/price.module';
import { ProductInfoComponent } from 'src/app/shared/components/product-info/product-info.component';
import { ProductInfoModule } from 'src/app/shared/components/product-info/product-info.module';
import { ProductPhotoComponent } from 'src/app/shared/components/product-photo/product-photo.component';
import { ProductPhotoModule } from 'src/app/shared/components/product-photo/product-photo.module';
import { PRODUCTS } from 'src/test-utilities/mock-data';
import { OrderItemActionsModule } from 'src/app/shared/components/order-item-actions/order-item-actions.module';
import { OrderItemActionsComponent } from 'src/app/shared/components/order-item-actions/order-item-actions.component';

describe('OrderItemComponent', () => {
  let component: OrderItemComponent;
  let fixture: ComponentFixture<OrderItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          ProductPhotoModule,
          ProductInfoModule,
          PriceModule,
          OrderItemActionsModule
        ],
        declarations: [
          OrderItemComponent,
          ProductPhotoComponent,
          ProductInfoComponent,
          PriceComponent,
          OrderItemActionsComponent,
          ProductPhotoComponent
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(OrderItemComponent);
          component = fixture.componentInstance;
          component.item = { ...PRODUCTS[0], quantity: 1 };
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
    const childComponents = fixture.debugElement.queryAll(
      By.directive(PriceComponent)
    );
    expect(childComponents.length).toEqual(2);
  });

  it('should have a order-item-actions component', () => {
    fixture.detectChanges();
    const childComponent = fixture.debugElement.query(
      By.directive(OrderItemActionsComponent)
    );
    expect(childComponent).toBeTruthy();
  });

  it('should have a correct link to the the product page', () => {
    const product = PRODUCTS[0];
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('.order-item-photo-link'));

    expect(link)
      .withContext('Could not find the title link element')
      .toBeTruthy();

    expect(link.nativeElement.getAttribute('href')).toBe(
      `/products/${product.id}`
    );
  });
});
