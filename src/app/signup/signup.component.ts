import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpFormGroup: FormGroup;
  @Input() submitted;
  constructor(private _service: AuthService, private _router: Router) {

  }

  ngOnInit() {
    this.submitted = false;
    this.signUpFormGroup = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        username: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),

        ])),
        country: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required)
      }),

    });

  }

  signupSubmit(form: NgForm) {
    this.submitted = true;
    if (this.signUpFormGroup.invalid) {

      return;
    }
    const userData = {
      username: this.signUpFormGroup.get('userData').get('username').value,
      email: this.signUpFormGroup.get('userData').get('email').value,
      password: this.signUpFormGroup.get('userData').get('password').value,
      country: this.signUpFormGroup.get('userData').get('country').value,
      gender: this.signUpFormGroup.get('userData').get('gender').value,
      role:'user'
    };
    this._service.signup(userData);
    this.submitted = false;
  }
}
