import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartIndicatorComponent } from './shared/components/cart-indicator/cart-indicator.component';
import { CartModalMessageModule } from './shared/components/cart-modal-message/cart-modal-message.module';

@NgModule({
  declarations: [AppComponent, CartIndicatorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CartModalMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
