import { Routes } from '@angular/router';
import { AuthenticationComponent } from './core/components/authentication/authentication.component';
import { LoginComponent } from './core/components/authentication/login/login.component';
import { RegisterComponent } from './core/components/authentication/register/register.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';

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
        {
            path: "sales",
            component: SalesComponent
        },
      
        {
            path: "inventory",
            component: InventoryComponent
        }
      ]
  }
];
