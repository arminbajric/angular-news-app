import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TemplateComponent } from './template/template.component';
import { QueueComponent } from './queue/queue.component';
import { PublicAppComponent } from './public-app/public-app.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { CategoryViewComponent } from './category-view/category-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AppBoardComponent,


    TemplateComponent,


    QueueComponent,


    PublicAppComponent,


    NewsPreviewComponent,


    CpanelComponent,


    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  entryComponents: [QueueComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
