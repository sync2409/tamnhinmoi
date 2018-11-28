import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSortArray'
})
export class CustomSortArrayPipe implements PipeTransform {
  transform(array: any[], field: string, _option:number): any[] {
    if (typeof array == 'undefined') {
      return;
    }
    let option = 1;
    if (typeof _option != 'undefined') {
      option = _option;
    }
    array.sort((a: any, b: any) => {
      if (option == 1) {//tăng dần
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      }

    });
    return array;
  }
}
