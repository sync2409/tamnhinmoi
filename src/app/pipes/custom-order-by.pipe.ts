import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customOrderBy'
})
export class CustomOrderByPipe implements PipeTransform {

  transform( array: any[], orderField: string, orderType: boolean ): any[] {
    if (typeof array == 'undefined') {
      return;
    }
    array.sort( ( a: any, b: any ) => {
        let ae = a[ orderField ];
        let be = b[ orderField ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
        if ( ae == be ) return 0;
        return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}
