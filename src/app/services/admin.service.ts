import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
state;
  constructor(private http: HttpClient) { }

  addNews(data):Observable<any>{
 
    const newsData={
      title:data.get('newsData').get('title').value,
      subtitle:data.get('newsData').get('subtitle').value,
      textContent:data.get('newsData').get('textContent').value,
      category:data.get('newsData').get('category').value,
      publish:new Date(),
      author:'admin',
      images:data.get('newsData').get('images').value
    }
    
    
   
   return  this.http.post<Response>(environment.baseApi + '/cpanel',newsData ,{
      headers: new HttpHeaders()
        .set('AdminUser', sessionStorage.getItem('AdminToken')),
      params: new HttpParams().set('action', 'addnews'),
      observe: 'response',
    }).pipe(map(response=>{return response}))
 
  }

}

