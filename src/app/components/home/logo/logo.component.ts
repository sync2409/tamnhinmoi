import { Component, OnInit } from '@angular/core';
import { CommonsServices } from 'src/app/services/commons.service';
import { jsConfig } from 'src/app/config/jsConfig';
declare var $: any;

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls:['./logo.component.css']
})
export class LogoComponent implements OnInit {
   BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;

  ListData;
  constructor(
    private commonService: CommonsServices
  ) { }

  ngOnInit() {
    this.commonService.GetListLogo().subscribe((data: any) => {
      console.log("GetListLogo", data)
      this.ListData = data.ListData;
      setTimeout(() => {
        $('#logodoitac').owlCarousel({
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
              items: 5,
              nav: false,
              loop: true
            },
            1000: {
              items: 6,
              nav: true,
              loop: true
            }
          }
        });
      }, 1000);
    });
  }

}
