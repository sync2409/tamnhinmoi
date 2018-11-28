import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../config/global';

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
    let arrCate = JSON.parse(sessionStorage.getItem(GlobalVariable.KeyListCate));
    return arrCate.filter(function (f) {
      return f.ParentID == that.CateDichVu;
    })
  }
}
