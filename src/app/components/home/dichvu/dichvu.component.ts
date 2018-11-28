import { Component, OnInit } from '@angular/core';
import { jsConfig } from '../../../config/jsConfig';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls:['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  public CateDichVu = 11;
  constructor() { }

  ngOnInit() {

  }
  GetCateByParentID(parentID) {
    let that = this;
    let arrCate = JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate));
    return arrCate.filter(function (f) {
      return f.ParentID == that.CateDichVu;
    })
  }
}
