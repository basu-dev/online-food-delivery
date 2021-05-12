import {Injectable} from '@angular/core';
import {Observable, of, Subject, throwError} from 'rxjs';
import { CartItem } from '../models/cartItem';
import {Category, Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {}
  items: Item[] = [
    {
      id: 1,
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: 100,
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]

    }, {
      id: 2,
      name: "Pizza",
      rating: 1.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/pizza.jpg'],
      price: 350,
      description: "Hello Wor lcabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]

    },
    {
      id: 3,
      name: "Chips Chilly",
      rating: 4.7,
      category: Category.nonveg,
      isSpecial: false,
      imageUrls: ['/assets/chips.jpg'],
      price: 150,
      review:[],
      description: "Soy sauce, coriander, tomato ketchup, onion, garlic, ginger, hot"
    },
    {
      id: 4,
      name: "Veg Biryani",
      rating: 4.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/veg-biryani.jpg'],
      price: 100,
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]
      

    },
    {
      id: 5,
      name: "Burger",
      rating: 3,
      category: Category.nonveg,
      isSpecial: false,
      imageUrls: ['/assets/aloo-tikki-burger.png'],
      price: 250,

      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]

    },
    {
      id: 6,
      name: "Chowmin",
      rating: 5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['assets/chowmin.jpg'],
      price: 90,
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]

    }, {
      id: 7,
      name: "Fried Rice",
      rating: 4.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/rice.jpg'],
      price: 130,
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger",
      review:[
        {
          id:1,
          stars:3,
          name:"Jon Dovi",
          review:"This food was ",
          imageUrl:'https://randomuser.me/api/portraits/men/43.jpg'
        },
        {
          id:1,
          stars:2,
          name:"Phillips",
          review:"This food was notgood",
          imageUrl:'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id:1,
          stars:5,
          name:"Hillary Clinton",
          review:"This food was awesome",
          imageUrl:'https://randomuser.me/api/portraits/women/43.jpg'
        }
      ]

    }
  ]
  cartItems:CartItem[]=[
    {
      item:{
        id: 6,
        name: "Chowmin",
        rating: 5,
        category: Category.veg,
        isSpecial: false,
        imageUrls: ['assets/chowmin.jpg'],
        price: 90,
        description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"
  
      },
      quantity:3,
      price:270
    }
  ];
  orderedItems:CartItem[]=[]
  cartItemSub = new Subject<CartItem[]>();
  orderedItemSub = new Subject<CartItem[]>();
  get totalPrice(){
    let sum:number=0;
    this.cartItems.forEach(item=>{
      sum+=item.price;
    });
    return sum;
  }

  fetchMenu$(): Observable<Item[]> {
    return of(this.items);
  }
  sendAllCartItems(){
    this.cartItemSub.next(this.cartItems);

  }
  sendAllOrderedItems(){
    this.orderedItemSub.next(this.orderedItems);
  }
  addItemsToCart(item:Item,quantity:number):Observable<boolean | any>{
    let avItem  = this.cartItems.find(cartItem=>cartItem.item == item);
    if(avItem){
      return throwError("Item already added")
    }
    let price = item.price * quantity;
    this.cartItems.push({item,quantity,price});
    this.sendAllCartItems();
    return of(true);
  }
  
  removeItemFromCart(item:CartItem):Observable<boolean>{
    this.cartItems = this.cartItems.filter(cartItem=>cartItem.item.id!=item.item.id);
    this.sendAllCartItems();
    return of(true);

  }
  getMenuById$(id: number): Observable<Item> {
    return of(this.items.find(item => item.id == id));
  }

  addToOrderedItems():void{
    this.cartItems.forEach(item=>this.orderedItems.push(item));
    this.cartItems=[];
    this.sendAllCartItems();
    this.sendAllOrderedItems();
  }

  addReview(star:number,reivew:String,id:number):void{
    let item = this.items.find(item=>item.id==id);
    item.review.unshift({
      name:"Test Name",
      id:5,
      review:reivew,
      imageUrl:"https://randomuser.me/api/portraits/men/45.jpg",
      stars:star
    });
    let totalPersons = item.review.length;
    let totalRating = item.rating * (totalPersons -1)+ star;
    let newRating = totalRating / totalPersons;
    newRating = Number.parseFloat(newRating.toFixed(2));
    item.rating = newRating;
  
  
    let removedlist = this.items.filter(item=>item.id != id);
    removedlist.unshift(item);
  }


}
