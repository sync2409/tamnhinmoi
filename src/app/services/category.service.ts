import { Injectable } from '@angular/core';
import { LibsService } from './libs.service';
import { Observable } from 'rxjs';
import { jsConfig } from '../config/jsConfig';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _libs: LibsService
  ) { }

  GetListCategories() {
    var KeyListCate = sessionStorage.getItem(jsConfig.KeyListCate);
    if (KeyListCate) {

    } else {
      var url = jsConfig.BASE_API_URL + 'categories/GetListCategories';
      this._libs.PostData(url, {}).subscribe((data: any) => {
        {
          sessionStorage.setItem(jsConfig.KeyListCate, JSON.stringify(data.ListData));
        }
      });
    }
  }
  GetListCategoriesFromAPI(): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'categories/GetListCategories';
    return this._libs.PostData(url, {});
  }
}
