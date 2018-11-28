import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { jsConfig } from 'src/app/config/jsConfig';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  public ListCate;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.GetListCategoriesFromAPI().subscribe((data: any) => {
      {
        console.log("GetListCategoriesFromAPI", data);
        sessionStorage.setItem(jsConfig.KeyListCate, JSON.stringify(data.ListData));
        this.ListCate = data.ListData.filter(function (f) {
          return f.Enabled > 0
        });
      }
    });
  }
  GetListeCateMenu(item) {
    if (!this.ListCate) {
      return;
    }
    return this.ListCate.filter(function (f) {
      return f.ParentID == item.CategoryID;
    })
  }
  GetListeCateTreeLevel(level) {
    if (!this.ListCate) {
      return;
    }
    return this.ListCate.filter(function (f) {
      return f.TreeLevel == level;
    })
  }
}
