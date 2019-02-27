import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { NewsServiceService } from '../services/news-service.service';
@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
@Input() news:any;
@Input() dataLoadingDone:boolean;
pages:any;
currentUrl:any;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute,private newsService:NewsServiceService) { 
    this.dataLoadingDone=false;
    this.pages=['1','2','3','4','5'];
   
    
  }
   
  ngOnInit() {
    this.currentUrl=this.route.url;
    console.log(this.currentUrl);
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
  updatePages(page){
    this.dataLoadingDone=false;
    let category:String=this.news[0].category;
    category=category.charAt(0).toLowerCase()+category.substring(1);
    
    const route='/home/'+category+'/pages'
    this.newsService.getCategoryPage(page,route).subscribe(response=>{
      this.news=response.body;
      this.dataLoadingDone=true;
    });
  }
  
}
