import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ListNewsComponent } from './components/home/news/list-news/list-news.component';
import { DetailNewsComponent } from './components/home/news/detail-news/detail-news.component';

const routes: Routes = [
  { path: 'list/:cateID', component: ListNewsComponent , pathMatch:"full"},
  { path: 'detail/:cateID/:newsID/:title', component: DetailNewsComponent , pathMatch:"full"},
  { path: '', component: HomeComponent , pathMatch:"full"},
  { path: '**', component: Page404Component , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
