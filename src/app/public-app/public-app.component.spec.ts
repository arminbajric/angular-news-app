import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAppComponent } from './public-app.component';

describe('PublicAppComponent', () => {
  let component: PublicAppComponent;
  let fixture: ComponentFixture<PublicAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
