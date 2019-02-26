import { Component, OnInit, Input, ChangeDetectorRef, NgZone } from '@angular/core';
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
@Input() news:any;
@Input() dataLoadingDone:boolean;
@Input() lastest='Lastest';
changeDetectorRefs:ChangeDetectorRef[] = [];

  constructor(private zone: NgZone,private _service: AuthService, private _router: Router,private _news:NewsServiceService,private http:HttpClient) { 
    this.dataLoadingDone=false;
    
  }

  ngOnInit() {
    const path=this._router.url;
    
    
    this.http.get(environment.baseApi+path,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response',
     
    }).subscribe(response=>{
   
    this.news=response.body;
    this.dataLoadingDone=true;
   
    console.log(this.news)
  });
  
  }
  
  
    
  
 
}
