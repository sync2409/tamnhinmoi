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
