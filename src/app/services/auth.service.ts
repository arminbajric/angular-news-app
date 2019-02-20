import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserFieldForm } from '../models/userLogin';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:UserFieldForm;
  valid = false;
  constructor(private _router: Router, private http: HttpClient ) { }

  clear(): void {
    localStorage.clear();
  }
  isAdmin(user){
    return true;
  }
  isAuthenticated(): boolean {
    if(localStorage.getItem('UserToken'))
    {
    
    this.http.get(environment.baseApi+'/portal',{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('authorization',localStorage.getItem('UserToken')),
      observe: 'response'
    }).subscribe(response=>{

    })
    
  }
    return false;
  }
  isTokenExpired(): boolean {
    return false;
  }
  isValidLogin() {
    return this.valid;
  }

  signup(form) {
    this.http.post(environment.baseApi + '/signup', form, { observe: 'response' }).subscribe((response) => {
      console.log(response.body);
      if (response.body) {


        this._router.navigate(['/login']);

        this.valid = true;
      } else {
        this.valid = false;
      }

    });
  }
  login(userData): any {
   

    const data = {
      email: userData.email,
      password: userData.password
    }
    console.log(data);

    this.http.post(environment.baseApi + '/login', data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json').set('authorization','text'),
      observe: 'response'
    })
      .subscribe((response) => {
        if(response.status==201){
          console.log(response.headers)
      localStorage.removeItem('UserToken');
      localStorage.setItem('UserToken',response.headers.get('Authorization'));
      this._router.navigate(['/portal']);
      this.valid=true;


    }
    else{
    
      this._router.navigate(['/login']);
      
    }
    
      });




  }
  logout(): void {
    this.clear();
    localStorage.removeItem('userToken');
    this._router.navigate(['/']);

  }

}




