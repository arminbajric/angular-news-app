import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import{NewsServiceService} from '../services/news-service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-public-app',
  templateUrl: './public-app.component.html',
  styleUrls: ['./public-app.component.css']
})
export class PublicAppComponent implements OnInit {

  constructor(private _service: AuthService, private _router: Router,private _news:NewsServiceService,private http:HttpClient) { }

  ngOnInit() {
    
  }
  getCategory(cat){
    const data={category:cat};
    this.http.get(environment.baseApi+'/category',{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response',
      params:new HttpParams().set('category',cat)
    }).subscribe(response=>{
      if(response.ok){
     this.redirectToCategory(response.body,cat);
    }
    
  });
  
    
  }
  redirectToCategory(data,cat){
    const navigationExtras: NavigationExtras = {
      queryParams: {
          "data": data
      }
    };
    this._router.navigate(['/'+cat],navigationExtras);
  }
}
