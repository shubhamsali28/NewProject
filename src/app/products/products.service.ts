import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
  return [
    {
      productId : 1,
      productName : 'Bread',
      productPrice : 3,
      productQuantity : 6,
      productQuality : 'Great',
      productRating : 4.9
    },
    {
      productId : 2,
      productName : 'Eggs',
      productPrice : 4,
      productQuantity : 12,
      productQuality : 'Ok',
      productRating : 2
    },
    {
      productId : 3,
      productName : 'Amul Butter',
      productPrice : 5,
      productQuantity : 1,
      productQuality : 'Tasty',
      productRating : 3.5
    }
  ];
  }
}
