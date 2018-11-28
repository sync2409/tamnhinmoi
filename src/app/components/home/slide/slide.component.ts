import { Component, OnInit } from '@angular/core';
import { CommonsServices } from 'src/app/services/commons.service';
import { jsConfig } from 'src/app/config/jsConfig';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  public ListData = [];
  constructor(
    private commonService: CommonsServices
  ) { }

  ngOnInit() {
    this.commonService.GetListSlide().subscribe((data: any) => {
      console.log("GetListSlide", data.ListData);
      this.ListData = data.ListData;
    });
  }

}
