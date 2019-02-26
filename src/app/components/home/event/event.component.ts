import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { jsConfig } from 'src/app/config/jsConfig';
declare var $: any;
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public ListData;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newService: NewsService,

  ) { }

  ngOnInit() {
    this.fDefault();

    return;
    setTimeout(() => {
      $('#prodctowlcarousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
            loop: true
          },
          600: {
            items: 3,
            nav: false,
            loop: true
          },
          1000: {
            items: 3,
            nav: true,
            loop: true
          }
        }
      });
    }, 1000);
  }
  fDefault() {
    if (sessionStorage.getItem(jsConfig.KeyListCate)) {
      this.ListData = JSON.parse(sessionStorage.getItem(jsConfig.KeyListCate)).filter(function (f) {
        return f.ParentID == jsConfig.CateSuKienDaDienRa && f.Enabled > 0;
      })
    } else {
      setTimeout(() => {
        this.fDefault();
      }, 1000);
    }
  }

}
