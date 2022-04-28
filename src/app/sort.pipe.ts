import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lionSort'
})
export class SortPipe implements PipeTransform {

   sorted = [];
  transform(value: any, sort: string, array: any): any {
    if(sort === 'lth'){
      this.sorted = value.sort((a: any,b: any) => a.price-b.price)
     } else if(sort === 'htl') {
      this.sorted = value.sort((a: any,b: any) => b.price-a.price)
     } else {
       this.sorted = array;
     }

    return this.sorted;
  }

}
