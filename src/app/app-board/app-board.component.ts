import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { QueueComponent } from '../queue/queue.component';
@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css']
})
export class AppBoardComponent implements OnInit, AfterViewInit {
  orderForm: FormGroup;
  items: FormArray;
  @Input() user: any;
  @ViewChild('mainQueue', { read: ViewContainerRef }) private anchor: ViewContainerRef;
  constructor(private formBuilder: FormBuilder, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    try {
      this.user = jwt_decode(localStorage.getItem('token'));
      console.log(this.user);
    } catch (Error) {
      return null;
    }

this.createFormGroup();
  }
  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(QueueComponent);

    this.anchor.createComponent(factory);
  }


  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      username:[ '',[Validators.required]],
      email: [ '',[Validators.required]],
      password: [ '',[Validators.required]],
      country:'',
      gender:''
    });
  }

}
