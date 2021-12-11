import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPhotoComponent } from './product-photo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductPhotoComponent],
  exports: [ProductPhotoComponent]
})
export class ProductPhotoModule {}
