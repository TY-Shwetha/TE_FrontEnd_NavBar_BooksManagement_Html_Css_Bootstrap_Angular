import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AllComponent } from './all/all.component';
import { VediosComponent } from './vedios/vedios.component';
import { PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import { BookNameComponent } from './book-name/book-name.component';
import { PagesComponent } from './pages/pages.component';
import { AuthorComponent } from './author/author.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllComponent,
    VediosComponent,
    PhotosComponent,
    NewsComponent,
    BookNameComponent,
    PagesComponent,
    AuthorComponent,
    PriceComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
