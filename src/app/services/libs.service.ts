import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibsService {
  public isDetailMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public BreadCrumb: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([{Name:"Trang chủ", Link:"/"}]);

  constructor(private httpClient: HttpClient) { }
  
  SetMenuStatus(_isDetailMenu) {
    this.isDetailMenu.next(_isDetailMenu);
  }
  UpdateBreadCrumb(data:any) {
    this.BreadCrumb.next(data);
  }

  FormatMoney(argValue): any {
    if (argValue == '0')
      return 0;
    argValue += '';
    let x = argValue.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? ',' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
  }
  PostData(url: string, datapost: any): Observable<any> {
    try {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${111}`
      });
      return this.httpClient.post<any>(url, JSON.stringify(datapost), { headers: reqHeader });
    } catch (error) {
      console.log(error);
    }
  }
}
