import { Component, OnInit } from '@angular/core';
import { jsConfig } from 'src/app/config/jsConfig';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public ListData;
  public cateID = jsConfig.CateSuSuKienTieuBieu;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    this.newService.GetListNews(jsConfig.CateSuSuKienTieuBieu).subscribe((data: any) => {
      console.log("GetListNews", jsConfig.CateSuSuKienTieuBieu, data);
      this.ListData = data.ListData;
    });
  }
}
