import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomSortArrayPipe } from './pipes/custom-sort-array.pipe';
import { CustomOrderByPipe } from './pipes/custom-order-by.pipe';
import { SlideComponent } from './components/home/slide/slide.component';
import { EventComponent } from './components/home/event/event.component';
import { DichvuComponent } from './components/home/dichvu/dichvu.component';
import { GioithieuComponent } from './components/home/gioithieu/gioithieu.component';
import { VideoComponent } from './components/home/video/video.component';
import { CustomersaidComponent } from './components/home/customersaid/customersaid.component';
import { NewsComponent } from './components/home/news/news.component';
import { HtmlSafePipe } from './pipes/html-safe.pipe';
import { LogoComponent } from './components/home/logo/logo.component';
import { LydochonComponent } from './components/home/lydochon/lydochon.component';
import { DetailNewsComponent } from './components/home/news/detail-news/detail-news.component';
import { ListNewsComponent } from './components/home/news/list-news/list-news.component';
import { CommonPipe, FormatMoney, SubString, SlugUrl, FormatDateTime, ReplaceContent } from './pipes/common.pipe';
import { NguoiSangLapComponent } from './components/home/nguoi-sang-lap/nguoi-sang-lap.component';
import { OtherNewsComponent } from './components/home/news/other-news/other-news.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CustomSortArrayPipe,
    CustomOrderByPipe,
    SlideComponent,
    EventComponent,
    DichvuComponent,
    GioithieuComponent,
    VideoComponent,
    CustomersaidComponent,
    NewsComponent,
    HtmlSafePipe,
    LogoComponent,
    LydochonComponent,
    ListNewsComponent,
    DetailNewsComponent,
    ListNewsComponent,
    CommonPipe,
    FormatMoney,
    SubString,
    SlugUrl,
    FormatDateTime,
    NguoiSangLapComponent,
    OtherNewsComponent,
    ReplaceContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
