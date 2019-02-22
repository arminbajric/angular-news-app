import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit {

  constructor(private _router:Router) { }
@Input() user:any;
  ngOnInit() {
    //checking if user token is in sessionStorage
    if(sessionStorage.getItem('AdminToken')){
      try {
        this.user = jwt_decode(sessionStorage.getItem('AdminToken'));
      
        console.log(this.user);
      } catch (Error) {
        //if token can't be decoded will be navigated back to login and current invalid token will be deleted
        this._router.navigate(['/login'],{ queryParams: { logged: false } })
        sessionStorage.removeItem('AdminToken');
      }
    }
    else{
      //if token is not present it will be navigated back to login
      this._router.navigate(['/login'],{ queryParams: { logged: false } })
      
    }
  }
  logOut(){
    this._router.navigate([''])
    sessionStorage.removeItem('AdminToken');
  }

}
