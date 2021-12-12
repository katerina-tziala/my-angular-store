import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoaderComponent]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(LoaderComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a lodaer icon', () => {
    const icon = fixture.debugElement.query(By.css('.fas'));
    expect(icon).withContext('Could not find the loader icon').toBeTruthy();
    expect(icon.nativeElement.className.trim()).toBe('fas fa-spinner fa-pulse');
  });
});
