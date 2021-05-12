import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService:AppService) { }
cartItemCount=0;
cartItemSub:Subscription;
  ngOnInit(): void {
    this.cartItemSub=this.appService.cartItemSub.subscribe(
      items=>this.cartItemCount=items.length
    )
    this.appService.sendAllCartItems();
  }
  ngOnDestroy():void{
    this.cartItemSub.unsubscribe();
  }

}
