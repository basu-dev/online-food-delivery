import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() onend = new EventEmitter();
  @Input() endtext: String;

  constructor() {}

  ngOnInit(): void {
    console.log(this.endtext)
  }

}
