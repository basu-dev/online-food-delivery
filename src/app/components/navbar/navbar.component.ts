import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService:AppService) { }
cartItemCount=0;
  ngOnInit(): void {
    this.appService.cartItemSub.subscribe(
      items=>this.cartItemCount=items.length
    )
    this.appService.sendAllCartItems();
  }

}
