import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CartIndicatorComponent } from './shared/components/cart-indicator/cart-indicator.component';
import { CartModalMessageComponent } from './shared/components/cart-modal-message/cart-modal-message.component';
import { CartModalMessageModule } from './shared/components/cart-modal-message/cart-modal-message.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, CartModalMessageModule],
        declarations: [
          AppComponent,
          CartIndicatorComponent,
          CartModalMessageComponent
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the app component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have a header', () => {
    const header = fixture.debugElement.query(By.css('.header'));
    expect(header).toBeTruthy();
  });

  it('should have a link to /', () => {
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('a'));
    expect(link.nativeElement.getAttribute('href')).toEqual('/');
  });

  it('should have a cart indicator component', () => {
    fixture.detectChanges();
    const cityComponent = fixture.debugElement.query(
      By.directive(CartIndicatorComponent)
    );
    expect(cityComponent).toBeTruthy();
  });

  it('should have a main section', () => {
    const main = fixture.debugElement.query(By.css('.app-content'));
    expect(main).toBeTruthy();
  });

  it('should have a cart modal message component', () => {
    const childComponent = fixture.debugElement.query(
      By.directive(CartModalMessageComponent)
    );
    expect(childComponent).toBeTruthy();
  });
});
