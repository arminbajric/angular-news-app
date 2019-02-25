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


import { QueueComponent } from './queue/queue.component';
import { PublicAppComponent } from './public-app/public-app.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { AddNewsComponent } from './admin-components/add-news/add-news.component';
import { EditUserComponent } from './admin-components/edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AppBoardComponent,


    


    QueueComponent,


    PublicAppComponent,


    NewsPreviewComponent,


    CpanelComponent,


    CategoryViewComponent,


    AddNewsComponent,


    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  entryComponents: [AddNewsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
