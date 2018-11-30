import { Component, OnInit } from '@angular/core';
import { jsConfig } from '../../../config/jsConfig';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls:['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  public ListData;
  public widthColum = "";
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor() { }

  ngOnInit() {
   this.ListData=JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate)).filter(function (f) {
      return f.ParentID == jsConfig.CateDichVu && f.Enabled > 0;
    })
    this.widthColum = (100 / this.ListData.length)+'%';
  }
  // GetCateByParentID(parentID) {
  //   let that = this;
  //   let arrCate = JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate));
  //   return arrCate.filter(function (f) {
  //     return f.ParentID == jsConfig.CateDichVu;
  //   })
  // }
  trackBydata(item){
    if(typeof item == 'undefined')
    {
      return;
    }
    return item.CategoryID;
  }
}
