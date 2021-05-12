import { Review } from "./review";

export interface Item {
  id?: number,
  name: String,
  description?: String,
  rating: number,
  category: Category,
  isSpecial: boolean,
  imageUrls: String[],
  price: number,
  review?:Review[]
}
export enum Category {
  veg,
  nonveg
}
