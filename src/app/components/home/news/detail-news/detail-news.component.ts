import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { ActivatedRoute, ParamMap } from '../../../../../../node_modules/@angular/router';
import { jsConfig } from '../../../../config/jsConfig';
declare var $: any;
@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {
  public ObjCate;
  public ObjNew;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let cateID = this.route.snapshot.paramMap.get('cateID');
      let newsID = this.route.snapshot.paramMap.get('newsID');
      this.ObjCate = JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate)).find(function (f) {
        return f.CategoryID == cateID;
      })
      //console.log("newsID cateID", newsID, cateID)
      this.newsService.GetNews(newsID).subscribe((data: any) => {
        //console.log("GetListNews", data);
        this.ObjNew = data.ListData.length > 0 ? data.ListData[0] : null;

      });
    });

    setTimeout(() => {
      this.abc();
    }, 100);
  }
  abc() {
    try {
      if ($(window).scrollTop() > 100) {
        $('.scrollToTop').click();
      }
    } catch (error) {

    }
  }

}
