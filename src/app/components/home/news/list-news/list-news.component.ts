import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { ActivatedRoute, ParamMap } from '../../../../../../node_modules/@angular/router';
import { jsConfig } from '../../../../config/jsConfig';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  public ListData = [];
  public ObjCate;
  public cateID = 0;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.cateID = parseInt(params.get('cateID'));
      console.log("cateID", this.cateID)
      let that = this;
      this.ObjCate = JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate)).find(function (f) {
        return f.CategoryID == that.cateID;
      })
      this.newsService.GetListNews(this.cateID).subscribe((data: any) => {
        console.log("GetListNews", data);
        this.ListData = data.ListData;
      });
    })
  }
}
