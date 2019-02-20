import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { PublicAppComponent } from './public-app/public-app.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import {NewsServiceService} from '../app/services/news-service.service'
export const routes: Routes = [
  {
    path: '',
    component: PublicAppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'portal',
    component: AppBoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cpanel',
    component: CpanelComponent
  },
  {
    path:'sport',
  component:CategoryViewComponent,
  },
  {
    path:'fun',
  component:CategoryViewComponent,
  },
  {
    path:'lifestyle',
  component:CategoryViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
