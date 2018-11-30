import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LibsService } from './libs.service';
import { jsConfig } from '../config/jsConfig';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private _libs: LibsService,
    private route: ActivatedRoute
  ) { }

  GetListNews(_cateID): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'news/GetListNews';
    return this._libs.PostData(url, { CategoryID: _cateID });
  }
  GetNews(newsID): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'news/GetListNews';
    return this._libs.PostData(url, { NewID: newsID });
  }
}
