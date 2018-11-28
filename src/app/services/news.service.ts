import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LibsService } from './libs.service';
import { jsConfig } from '../config/jsConfig';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private _libs: LibsService
  ) { }

  GetListNews(_cateID): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'news/GetListNews';
    return this._libs.PostData(url, {CategoryID:_cateID});
  }
}
