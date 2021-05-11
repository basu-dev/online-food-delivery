export interface Item {
  name: String,
  description?: String,
  rating: Number,
  category: Category,
  isSpecial: boolean,
  imageUrls: String[],
  price: String
}
export enum Category {
  veg,
  nonveg
}
