import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LibsService } from './libs.service';
import { jsConfig } from '../config/jsConfig';

@Injectable({
  providedIn: 'root'
})
export class CommonsServices {
  public isDetailMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public BreadCrumb: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([{ Name: "Trang chủ", Link: "/" }]);

  constructor(
    private _libs: LibsService
  ) { }

  GetListSlide(): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'Slides/GetListSlides';
    return this._libs.PostData(url, { CategoryID: jsConfig.CateSlideHome });
  }
  GetListLogo(): Observable<any> {
    let url = jsConfig.BASE_API_URL + 'Media/ImageGetList';
    return this._libs.PostData(url, { CategoryID: jsConfig.CateLogo });
  }

}
