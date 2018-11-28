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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CustomSortArrayPipe,
    CustomOrderByPipe
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
