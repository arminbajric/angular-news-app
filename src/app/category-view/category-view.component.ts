import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
@Input() news:any;
@Input() dataLoadingDone:boolean;
  constructor(private router:Router,private http:HttpClient) { 
    this.dataLoadingDone=false;
  }
   
  ngOnInit() {

    this.http.get(environment.baseApi+this.router.url,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
        params:new HttpParams().set('page','1'),
      observe: 'response',
     
    }).subscribe(response=>{
      
      
      if(response.status==200){
        
      this.news=response.body;
     
      
    }
    this.dataLoadingDone=true;
  })
  
 
  }
}
