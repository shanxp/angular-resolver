import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

import { MyHttp } from './myhttp.service';

@Injectable()
export class NewsResolver implements Resolve<any> {

  constructor(private http: MyHttp, private router: Router) { }

  public news: any = undefined;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let newsUrl = 'https://httpbin.org/post';
    let news = 'The quick brown fox jumps over the lazy dog'; //Mock data to be returned by test API

    return this.http.getPost(newsUrl, news).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => {
          this.router.navigate(['/home']);
          return of('data not available at this time');
        //   return Observable.throw(err.json().error);
       } )
    )

    // return this.http.post(newsUrl, news).pipe(
    //   map( (dataFromApi) => dataFromApi ),
    //   catchError( (err) => {
    //       this.router.navigate(['/home']);
    //       return of('data not available at this time');
    //     //   return Observable.throw(err.json().error);
    //    } )
    // )

        
  }
}