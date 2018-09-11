import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app.routes';
import { ContentComponent } from './content.component';
import { MyHttp } from './myhttp.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [MyHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
