import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lionSort'
})
export class SortPipe implements PipeTransform {

   sorted = [];
  transform(value: any, args: string): any {
    if(args==='lth'){
      this.sorted = value.sort((a: any,b: any) => a.price-b.price)
     } else if(args === 'htl') {
      this.sorted = value.sort((a: any,b: any) => b.price-a.price)
     } else {
       this.sorted = value;
     }

    return this.sorted;
  }

}
