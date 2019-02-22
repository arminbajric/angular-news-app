import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { PublicAppComponent } from './public-app/public-app.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { CategoryViewComponent } from './category-view/category-view.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [{
      path: '',
      redirectTo:'lastest',
      pathMatch:'full'
    }, 
    {
      path:'lastest',
      component:PublicAppComponent
    },{
      path: 'sport',
      component: PublicAppComponent
    }, {
      path: 'lifestyle',
      component: PublicAppComponent
    },
    {
      path: 'fun',
      component: PublicAppComponent
    }
    ]
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
    children:[{
      path:'',
      redirectTo:'lastest',
      pathMatch:'full'
    },{
      path:'lastest',
      component:AppBoardComponent
    },
    {
      path: 'sport',
      component: CategoryViewComponent,
    },
    {
      path: 'fun',
      component: CategoryViewComponent,
    },
    {
      path: 'lifestyle',
      component: CategoryViewComponent,
    },{
      path:'user',
      component:CategoryViewComponent
    }]
  },
  {
    path: 'cpanel',
    component: CpanelComponent
  },
  {
    path: 'sport',
    component: CategoryViewComponent,
  },
  {
    path: 'fun',
    component: CategoryViewComponent,
  },
  {
    path: 'lifestyle',
    component: CategoryViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
