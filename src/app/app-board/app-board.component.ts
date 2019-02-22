import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';


import { Router} from '@angular/router';
import { longStackSupport } from 'q';
@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css']
})
export class AppBoardComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  @Input() user: any;
 
  constructor(private formBuilder: FormBuilder, private resolver: ComponentFactoryResolver,private _router:Router) {
  }

  ngOnInit() {
    if(localStorage.getItem('UserToken')){
      try {
        this.user = jwt_decode(localStorage.getItem('UserToken'));
      
        console.log(this.user);
      } catch (Error) {
        this._router.navigate(['/login'],{ queryParams: { logged: false } });
      }
    }
    else{
     this._router.navigate(['/login'],{ queryParams: { logged: false } })
      
    }
    
}
logOut(){
  this._router.navigate(['']);
  localStorage.removeItem('UserToken');
  
}
  


 
 

}
