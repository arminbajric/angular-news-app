import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit, AfterViewInit {
  @ViewChild('actionField', { read: ViewContainerRef }) element: ViewContainerRef;
  state: boolean;
  submitted:boolean;
  array:any;
  @Input() addNewsFormGroup = new FormGroup({
    newsData: new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      subtitle: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      textContent: new FormControl('', Validators.compose([Validators.required,])),
      category: new FormControl('', Validators.compose([Validators.required])),
      images: new FormControl('')

    })
  })

  constructor(private _changeDetectionRef: ChangeDetectorRef, private _router: Router, private _admin: AdminService, private resolver: ComponentFactoryResolver) { 
    this.state=false;
    this.submitted=false;
  }
  @Input() user: any;





  ngOnInit() {
    //checking if user token is in sessionStorage
    if (sessionStorage.getItem('AdminToken') != null) {
      try {
        this.user = jwt_decode(sessionStorage.getItem('AdminToken'));


      } catch (Error) {
        //if token can't be decoded will be navigated back to login and current invalid token will be deleted
        this._router.navigate(['/login'], { queryParams: { logged: false } })
        sessionStorage.removeItem('AdminToken');

      }

    }
    else {
      //if token is not present it will be navigated back to login
      this._router.navigate(['/login'], { queryParams: { logged: false } })

    }


  }
  ngAfterViewInit() {





  }
  logOut() {
    this._router.navigate([''])
    sessionStorage.removeItem('AdminToken');
  }

  onFileChanged(event) {
    
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const value:String=reader.result.toString();
        
        this.addNewsFormGroup.get('newsData').get('images').setValue({
          filename: file.name,
          filetype: file.type,
          value: value.split(',')[1]  })
      };
    }
   console.log( this.addNewsFormGroup.get('newsData').get('images').value)
    
  }
  addNewsSubmit(data:FormGroup) {
    this.submitted=true;
    
  
    
    this._admin.addNews(data).subscribe(response => {
      if (response.status == 201) {
        this.state = true;
        this.submitted=false;
      }
    });


  }
}
