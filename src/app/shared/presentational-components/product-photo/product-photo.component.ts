import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-photo',
  templateUrl: './product-photo.component.html',
  styleUrls: ['./product-photo.component.scss']
})
export class ProductPhotoComponent {
  @Input() public url: string | undefined;
}
