import { Component, OnInit } from '@angular/core';
import { jsConfig } from 'src/app/config/jsConfig';
import { NewsService } from 'src/app/services/news.service';

declare var $: any;

@Component({
  selector: 'app-customersaid',
  templateUrl: './customersaid.component.html',
  styleUrls: ['./customersaid.component.css']
})
export class CustomersaidComponent implements OnInit {

  public ListData;
  public BASE_URL_MEDIA = jsConfig.BASE_URL_MEDIA;
  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    this.newService.GetListNews(jsConfig.Customersaid).subscribe((data: any) => {
      ////console.log("GetListNews", jsConfig.Customersaid, data);
      this.ListData = data.ListData;
      setTimeout(() => {
        $('#customerSaid')
        // .on('initialized.owl.carousel', function () {
        //   setTimeout(() => {
        //    // $("#divCustomerSaid .owl-item.active").hide().fadeIn("slow");
        //     $(".owl-stage div").removeClass("current");
        //     $("#divCustomerSaid .owl-item.active").eq(0).addClass("current");
        //     $("#divCustomerSaid .owl-item.active").eq(2).addClass("current");
        //   }, 100);
        // }).on('changed.owl.carousel', function () {
        //   setTimeout(() => {
        //     $(".owl-stage div").removeClass("current");
        //     $("#divCustomerSaid .owl-item.active").eq(0).addClass("current");
        //     $("#divCustomerSaid .owl-item.active").eq(2).addClass("current");
        //   }, 100);
        // })
        .owlCarousel({
          loop: true,
          responsiveClass: true,
          autoplay: true,
          autoplayTimeout:  1113000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
              nav: true,
              loop: true
            },
            600: {
              items: 2,
              nav: false,
              loop: true
            },
            1000: {
              items: 2,
              nav: true,
              loop: true
            }
          }
        });
      }, 1000);
    });
  }

}
