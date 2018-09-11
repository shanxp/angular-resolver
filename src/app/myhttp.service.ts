import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MyHttp {

    constructor(private http: HttpClient) { }

    getPost(newsUrl: string, news: string) {
        return this.http.post(newsUrl, news).pipe(
            map((response: Response) => {
                console.log('r', response); 
                return response['data']
            }
            )
        );
    }

} 