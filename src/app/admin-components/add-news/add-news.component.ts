import { Component, OnInit, AfterViewInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit{
  state:boolean;
  @Input()addNewsFormGroup = new FormGroup({
    newsData: new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,
       
      ])),
      subtitle: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      textContent:new FormControl('',Validators.compose([Validators.required,])),
      category:new FormControl('',Validators.compose([Validators.required]))
      
    })
  })
  constructor(private _admin:AdminService) { }

  ngOnInit() {
    
    
  }
 
  
  
}
