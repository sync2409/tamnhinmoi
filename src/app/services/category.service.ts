import { Injectable } from '@angular/core';
import { GlobalVariable } from '../config/global';
import { LibsService } from './libs.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _libs: LibsService
  ) { }

  GetListCategories() {
    var KeyListCate = sessionStorage.getItem(GlobalVariable.KeyListCate);
    if (KeyListCate) {

    } else {
      var url = GlobalVariable.BASE_API_URL + 'categories/GetListCategories';
      this._libs.PostData(url, {}).subscribe((data: any) => {
        {
          sessionStorage.setItem(GlobalVariable.KeyListCate, JSON.stringify(data.ListData));
        }
      });
    }
  }
  GetListCategoriesFromAPI(): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'categories/GetListCategories';
    return this._libs.PostData(url, {});
  }
}
