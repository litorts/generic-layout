import { Routes } from '@angular/router';
import { AuthenticationComponent } from './core/components/authentication/authentication.component';
import { LoginComponent } from './core/components/authentication/login/login.component';
import { RegisterComponent } from './core/components/authentication/register/register.component';
import { LayoutComponent } from './core/components/layout/layout.component';

export const routes: Routes = [
  {
      path: "auth",
      component: AuthenticationComponent,
      children:[
          {
              path: "",
              redirectTo: "login",
              pathMatch: "full"
          },
          {
              path: "login",
              component: LoginComponent
          },
          {
              path: "register",
              component: RegisterComponent
          }
      ]
  },
  {
      path: "",
      component: LayoutComponent,
      children: [

      ]
  }
];
