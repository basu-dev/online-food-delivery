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
  quantity:number=1;
  itemAdded:boolean=false;
  myRating=0;
  myReview:String;
  id: number;
  item: Item;
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.id = param['id'],
      this.getItem();
    },
      (err: any) => console.log(err)
    )
    this.checkItemAlreadyAdded();

  }
  getItem(){
    this.appService.getMenuById$(this.id).subscribe(
      (item: Item) => this.item = item,
      (err: any) => console.log(err)
    )
  }
  addToCart():void{
    this.appService.addItemsToCart(this.item,this.quantity).subscribe(
      data=>this.itemAdded=data,
      err=>console.log(err)
    );
    // console.log(this.itemAdded)
  }
  starClick(ev:number):void{
  this.myRating=ev;
  }
  saveReview(){
    this.appService.addReview(this.myRating,this.myReview,this.id);
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
