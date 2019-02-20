import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private _router: Router, private http: HttpClient) { }
  getCategoryNews(category){
    const news={};
    return news;
  }
}
