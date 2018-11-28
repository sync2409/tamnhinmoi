import { Component, OnInit } from '@angular/core';
import { jsConfig } from '../../../config/jsConfig';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls:['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  public ListData;
  constructor() { }

  ngOnInit() {
   this.ListData=JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate)).filter(function (f) {
      return f.ParentID == jsConfig.CateDichVu;
    })
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
