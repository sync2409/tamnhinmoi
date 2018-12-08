import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-other-news',
  templateUrl: './other-news.component.html',
  styleUrls: ['./other-news.component.css']
})
export class OtherNewsComponent implements OnInit {
  public ListData = [];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.GetListNews().subscribe((data: any) => {
      this.ListData = data.ListData.slice(0, 10);
    })
  }

}
