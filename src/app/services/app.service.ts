import { ThrowStmt } from '@angular/compiler';
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
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

    }, {
      id: 2,
      name: "Pizza",
      rating: 1.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/pizza.jpg'],
      price: '350',
      description: "Hello Wor lcabbage, capsicum, red onion, garlic, ginger"

    },
    {
      id: 3,
      name: "Chips Chilly",
      rating: 4.7,
      category: Category.nonveg,
      isSpecial: false,
      imageUrls: ['/assets/chips.jpg'],
      price: '150',
      description: "Soy sauce, coriander, tomato ketchup, onion, garlic, ginger, hot"
    },
    {
      id: 4,
      name: "Veg Biryani",
      rating: 4.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/veg-biryani.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"


    },
    {
      id: 5,
      name: "Burger",
      rating: 3,
      category: Category.nonveg,
      isSpecial: false,
      imageUrls: ['/assets/aloo-tikki-burger.png'],
      price: '250',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

    },
    {
      id: 6,
      name: "Chowmin",
      rating: 5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['assets/chowmin.jpg'],
      price: '90',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

    }, {
      id: 7,
      name: "Fried Rice",
      rating: 4.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/rice.jpg'],
      price: '130',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

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
        price: '90',
        description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"
  
      },
      quantity:3
    }
  ];
  cartItemSub = new Subject<CartItem[]>();

  fetchMenu$(): Observable<Item[]> {
    return of(this.items);
  }
  sendAllCartItems(){
    this.cartItemSub.next(this.cartItems);

  }
  addItemsToCart(item:Item,quantity:Number):Observable<boolean | any>{
    let avItem  = this.cartItems.find(cartItem=>cartItem.item == item);
    if(avItem){
      return throwError("Item already added")
    }
    this.cartItems.push({item,quantity});
    this.sendAllCartItems();
    return of(true);
  }
  removeItemFromCart(item:CartItem){
    this.cartItems = this.cartItems.filter(cartItem=>item!=item);
    this.sendAllCartItems();
  }
  getMenuById$(id: Number): Observable<Item> {
    return of(this.items.find(item => item.id == id));
  }
}
