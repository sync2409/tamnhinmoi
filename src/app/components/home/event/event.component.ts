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
    private newService: NewsService
  ) { }

  ngOnInit() {
    this.newService.GetListNews(jsConfig.CateSuKienDaDienRa).subscribe((data: any) => {
      console.log("GetListNews", jsConfig.CateSuKienDaDienRa, data);
      this.ListData = data.ListData;
      setTimeout(() => {
        $('#prodctowlcarousel').owlCarousel({
          loop: true,
          responsiveClass: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
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
    });
  }

}
