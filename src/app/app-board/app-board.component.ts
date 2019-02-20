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
  // opens tab and sets its properties
  openTab(evt, tabName) {
    let i: any;
    const tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id === tabName) {
        tabcontent[i].style.display = 'block';
      } else {
        tabcontent[i].style.display = 'none';
      }
    }
    const tablinks = document.getElementsByClassName('tablinks') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i].id === tabName) {
        tablinks[i].className += ' active';
      } else {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
    }
  }
  // inject template rows as component


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
