import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
@Input() news:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {

    this.http.get(environment.baseApi+this.router.url,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response',
     
    }).subscribe(response=>{
      console.log(response.body);
      if(response.ok){
        
      this.news=response.body;
    }
  })
  }
}
