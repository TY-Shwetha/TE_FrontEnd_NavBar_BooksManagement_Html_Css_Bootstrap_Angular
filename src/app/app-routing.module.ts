import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AuthorComponent } from './author/author.component';
import { BookNameComponent } from './book-name/book-name.component';
import { NavComponent } from './nav/nav.component';
import { PagesComponent } from './pages/pages.component';
import { PhotosComponent } from './photos/photos.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { VediosComponent } from './vedios/vedios.component';


const routes: Routes = [
  {path:'nav',component:NavComponent},
  {path:'all',component:AllComponent},
  {path:'vedios',component:VediosComponent},
  {path:'photos',component:PhotosComponent},
  {path:'news',component:AllComponent},
  {path:'booksname',component:BookNameComponent},
  {path:'author',component:AuthorComponent},
  {path:'pages',component:PagesComponent},
  {path:'price',component:PriceComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
