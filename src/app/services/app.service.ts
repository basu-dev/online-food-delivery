import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category, Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {}
  items: Item[] = [
    {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

    }, {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"

    },
    {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"
    },
    {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"


    },
    {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100',
      description: "Soy sauce, carrot, cabbage, capsicum, red onion, garlic, ginger"


    },
    {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['assets/Veg-Momo.jpg'],
      price: '100'

    }, {
      name: "Veg Momo",
      rating: 3.5,
      category: Category.veg,
      isSpecial: false,
      imageUrls: ['/assets/Veg-Momo.jpg'],
      price: '100'

    }
  ]
  fetchMenu(): Observable<Item[]> {
    return of(this.items);
  }
}
