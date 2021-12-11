import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary.component';
import { PriceModule } from 'src/app/shared/components/price/price.module';

@NgModule({
  imports: [CommonModule, PriceModule],
  declarations: [ShoppingCartSummaryComponent],
  exports: [ShoppingCartSummaryComponent]
})
export class ShoppingCartSummaryModule {}
