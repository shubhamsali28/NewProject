import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

//  value means all the data in the table and args is the what we pass in the search box
// -1 means it has found the match and it will return some value

  transform(value: any, args?: any): any {
    return args ?
    value.filter((item, index) => {
    if (item.productName.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
      return true;
    }})
    : value;
  }

}
