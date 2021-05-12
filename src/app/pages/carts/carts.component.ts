import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CartItem } from 'src/app/models/cartItem';
import { AppService } from 'src/app/services/app.service';
import { ModalService } from 'src/app/services/modal.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor(private appService:AppService,
              private modalService:ModalService,
              private toastr:ToastrService
    ) { }
cartItems:CartItem[];
cartItemSub:Subscription;
orderedItems:CartItem[];
orderedItemSub:Subscription;

  ngOnInit(): void {
    this.cartItemSub=this.appService.cartItemSub.subscribe(
      items=>{this.cartItems=items;
      console.log(items);
      }
    )
    this.orderedItemSub=this.appService.orderedItemSub.subscribe(
      items=>{this.orderedItems=items;
      console.log(items);
      }
    )

    this.appService.sendAllCartItems();
    this.appService.sendAllOrderedItems();
    console.log(this.cartItems);
  }
  openModal(id:string):void{
    this.modalService.open(id);
  }
  removeFromCart(item:CartItem):void{
    this.appService.removeItemFromCart(item).subscribe(data=>{
      this.toastr.success('Item removed from cart.')
    });
  }
  ngOnDestroy():void{
    this.cartItemSub.unsubscribe();
  }

}
