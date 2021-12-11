import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) {
    if (!this.cartService.itemsInCart) {
      this.router.navigate(['/shoppingcart'])
    }
  }

  ngOnInit() {
  }

}
