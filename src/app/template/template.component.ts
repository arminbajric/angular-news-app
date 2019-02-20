import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { ComponentRef, EmbeddedViewRef } from '@angular/core';

import { TemplateModel } from '../models/template-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  formGroup= new FormGroup({
    row: new FormGroup({
      text: new FormControl(''),
      type: new FormControl(''),
      quantity: new FormControl(''),
      restriction: new FormControl(''),

    })
  });
@Input() row;
@ViewChild('template', { read: ViewContainerRef }) private anchor: ViewContainerRef;
@ViewChild('quantity') private quantity: HTMLElement;
@ViewChild('type') private type: HTMLElement;
@ViewChild('templateRow') private templateRow: HTMLElement;
dialogComponentRef: ComponentRef<TemplateComponent>;
constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

ngOnInit() {
  this.row = 1;

}

change(form) {

  console.log(this.type);
  const node = document.getElementById('quantity');
  const place = document.getElementById('qRow');
  if (form.value === 'Check box' || form.value === 'Radio button') {
    const formRow = document.getElementById('row');
    console.log('if');
    const option1 = document.createElement('option') as HTMLElement;
    option1.textContent = '1';
    option1.setAttribute('name', '1');
    node.appendChild(option1);
    const option2 = document.createElement('option') as HTMLElement;
    option2.textContent = '2';
    option2.setAttribute('name', '2');
    node.appendChild(option2);
    const option3 = document.createElement('option') as HTMLElement;
    option3.textContent = '3';
    option3.setAttribute('name', '3');
    node.appendChild(option3);


    if (form.value === 'Check box') {
      const div = document.createElement('div');
      div.setAttribute('_ngcontent-c2', '');
      div.className = 'elementRow';
      div.id = 'buttons';

      const field = document.createElement('input');
      field.type = 'text';
      field.id = 'check1';
      field.className = 'col-md-4 ml-20 ng-valid ng-dirty ng-touched';
      field.setAttribute('formControlName', 'check1');
      field.setAttribute('ng-reflect-name', 'check1');
      div.appendChild(field);
      formRow.insertBefore(div, place);

    }
  } else {
    console.log('else');
    const fields = document.getElementById('buttons');
    fields.innerHTML = '';
    node.innerHTML = '';
  }
}

saveRow() {
  console.log(this.formGroup);

}
addField(form) {
  if (form.value === '1') {
    const node = document.getElementById('buttons');
    node.innerHTML = '';
    const field = document.createElement('input');
    field.type = 'text';
    field.id = 'check1';
    field.className = 'col-md-4 ml-20 ng-valid ng-dirty ng-touched';
    field.setAttribute('formControlName', 'check1');
    field.setAttribute('ng-reflect-name', 'check1');
    node.appendChild(field);
  }
}

}


