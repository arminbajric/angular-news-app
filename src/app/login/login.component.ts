import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import AOS from 'aos';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input()  submitted: Boolean;
  @Input() userFound:Boolean;
  loginGroupForm: FormGroup;
  constructor(private _service: AuthService, private _router: Router,private route:ActivatedRoute) {

  }

  ngOnInit() {
    AOS.init();
    this.submitted=false;
   this.route.queryParams.subscribe(params=>{
     if(params['logged'])
     {
       this.userFound=false;
     }
   })
    if (localStorage.getItem('UserToken')!=null) {
      this._router.navigate(['/portal']);
    }
    this.loginGroupForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
      })
    })

  }
  onFormSubmit(form) {
    this.submitted = true;
    if (this.loginGroupForm.invalid === false) {
      const data = {
        email: this.loginGroupForm.get('userData').get('email').value,
        password: this.loginGroupForm.get('userData').get('password').value
      }
      this.userFound=this._service.login(data);
      if (this._service.isValidLogin() === false) {
        this.submitted = true;
      }
      else {
        
      }
    }
  }
  public setLogin() {
    this.submitted = true;
  }
}


