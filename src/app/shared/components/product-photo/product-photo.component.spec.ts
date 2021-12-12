import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductPhotoComponent } from './product-photo.component';

describe('ProductPhotoComponent', () => {
  let component: ProductPhotoComponent;
  let fixture: ComponentFixture<ProductPhotoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProductPhotoComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ProductPhotoComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT display the photo-background element, when url NOT defined', () => {
    fixture.detectChanges();
    const photoBackground = fixture.debugElement.query(
      By.css('.photo-background')
    );
    expect(photoBackground).toBeFalsy();
  });

  it('should display the photo, when url defined', () => {
    component.url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    fixture.detectChanges();

    const photoBackground = fixture.debugElement.query(
      By.css('.photo-background')
    );
    expect(photoBackground)
      .withContext('Could not find the photo-background element')
      .toBeTruthy();
  });
});
