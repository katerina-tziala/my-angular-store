import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertMessageComponent } from './alert-message.component';

describe('AlertMessageComponent', () => {
  let component: AlertMessageComponent;
  let fixture: ComponentFixture<AlertMessageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AlertMessageComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(AlertMessageComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the alert message', () => {
    component.message = 'message';
    fixture.detectChanges();

    const message = fixture.debugElement.query(By.css('.alert-message'));
    expect(message)
      .withContext('Could not find the alert-message element')
      .toBeTruthy();
    expect(message.nativeElement.textContent.trim()).toBe('message');
  });
});
