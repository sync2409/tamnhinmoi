import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { jsConfig } from '../../../../config/jsConfig';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {

  public ObjNew;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let cateID = this.route.snapshot.paramMap.get('cateID');
    let newsID = this.route.snapshot.paramMap.get('newsID');

    console.log("newsID cateID", newsID, cateID)
    this.newsService.GetNews(newsID).subscribe((data: any) => {
      console.log("GetListNews", data);
      this.ObjNew =data.ListData.length >0 ? data.ListData[0] : null;
    });
  }

}
