import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { jsConfig } from '../../../../config/jsConfig';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  public ListData = [];
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let cateID = this.route.snapshot.paramMap.get('cateID');
    console.log("cateID", cateID)
    this.newsService.GetListNews(cateID).subscribe((data: any) => {
      console.log("GetListNews", data);
      this.ListData = data.ListData;
    });
  }

}
