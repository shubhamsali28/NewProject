import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products: any = [];


  showHide: boolean = true;

  toggleImage() {
 this.showHide = !this.showHide;
  }

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    // for getting all the data from ProductsService which is array of products
    this.products = this.productService.getProducts();
  }

  sendDataParent(value:string) {
   alert(value);
  }

}
