import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private _router: Router, private http: HttpClient) { }
  getCategoryPage(page, route): Observable<any> {
    return this.http.get(environment.baseApi + route, {
      headers: new HttpHeaders().set('Content-type', 'aplication/json'),
      params: new HttpParams().set('page', page),
      observe:'response'
    }).pipe(map(response=>{return response}));

  }
}
