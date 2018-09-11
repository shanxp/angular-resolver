import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news.component';
import { NewsResolver } from './news-resolver.service';
import { ContentComponent } from './content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'news',
    component: NewsComponent,
    resolve: {
      news: NewsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [NewsResolver]
})
export class AppRoutingModule {} 