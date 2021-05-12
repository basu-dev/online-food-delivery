import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor(private appService:AppService) { }
cartItems:CartItem[];
  ngOnInit(): void {
    this.appService.cartItemSub.subscribe(
      items=>this.cartItems=items
    )
    this.appService.sendAllCartItems();
    console.log(this.cartItems);
  }

}
