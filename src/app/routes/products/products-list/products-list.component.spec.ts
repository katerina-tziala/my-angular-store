import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsListComponent } from './products-list.component';
import { AlertMessageModule } from 'src/app/shared/components/alert-message/alert-message.module';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListItemModule } from './product-list-item/product-list-item.module';
import { AlertMessageComponent } from 'src/app/shared/components/alert-message/alert-message.component';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from 'src/test-utilities/mock-data';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          AlertMessageModule,
          ProductListItemModule
        ],
        declarations: [
          ProductsListComponent,
          AlertMessageComponent,
          ProductListItemComponent
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ProductsListComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert message when no products provided', () => {
    component.products = [];
    fixture.detectChanges();

    const messageComponent = fixture.debugElement.query(
      By.directive(AlertMessageComponent)
    );

    expect(messageComponent).toBeTruthy();
    const message = messageComponent.query(By.css('.alert-message'));
    expect(message.nativeElement.textContent.trim()).toBe(
      'Products were not found!'
    );
  });

  it('should display the products list', () => {
    component.products = PRODUCTS;
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(
      By.css('.product-list-item')
    );

    expect(listItems).toBeTruthy();
    expect(listItems.length).toEqual(PRODUCTS.length);
  });
});
