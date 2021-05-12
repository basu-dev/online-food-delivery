import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from 'src/app/models/item';
import {AppService} from 'src/app/services/app.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private appService: AppService
  ) {}
  quantity:Number=1;
  itemAdded:boolean=false;
  id: Number;
  item: Item;
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.id = param['id'],
        this.appService.getMenuById$(this.id).subscribe(
          (item: Item) => this.item = item,
          (err: any) => console.log(err)
        )
      console.log(this.id)
    },
      (err: any) => console.log(err)
    )
    this.checkItemAlreadyAdded();

  }

  addToCart():void{
    this.appService.addItemsToCart(this.item,this.quantity).subscribe(
      data=>this.itemAdded=data,
      err=>console.log(err)
    );
    console.log(this.appService.cartItems)
  }
  checkItemAlreadyAdded():void{
    let item = this.appService.cartItems.find(item=>item.item == this.item);
    if(item){
      this.itemAdded=true;

    }else{
      this.itemAdded=false;
    }
  }
}
