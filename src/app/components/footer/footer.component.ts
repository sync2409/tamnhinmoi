import { Component, OnInit } from '@angular/core';
import { jsConfig } from 'src/app/config/jsConfig';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public ListData = [];
  public widthColum = "";
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private cateService: CategoryService
  ) { }

  ngOnInit() {
    this.cateService.GetListCategoriesFromAPI().subscribe((data: any) => {
      this.ListData = data.ListData.filter(function (f) {
        return f.ParentID == jsConfig.CateDichVu && f.Enabled > 0;
      })
    });
    this.widthColum = (100 / this.ListData.length) + '%';
  }

}
