import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/models';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  @Input() order!: Order;
}
