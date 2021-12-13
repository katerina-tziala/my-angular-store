import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartMessage, CartMessageType } from '../../models/models';
import { CartModalMessageService } from '../../services/cart-modal-message.service';

@Component({
  selector: 'app-cart-modal-message',
  templateUrl: './cart-modal-message.component.html',
  styleUrls: ['./cart-modal-message.component.scss']
})
export class CartModalMessageComponent {
  public message$: Observable<CartMessage | null>;

  constructor(private cartModalMessageService: CartModalMessageService) {
    this.message$ = this.cartModalMessageService.getMessage$();
  }

  public messageForAddition(message: CartMessage): boolean {
    return message.type === CartMessageType.Added;
  }

  public closeMessage(): void {
    this.cartModalMessageService.removeMessage();
  }
}
