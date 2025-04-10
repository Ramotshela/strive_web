import { EmployeeComponent } from './components/employee/employee.component';
import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './Guards/guards/auth.guard';
import { canDeactivateGuard } from './Guards/guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full',
      },
      {
        path: 'master',
        component: MasterComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'client-project',
        canDeactivate: [canDeactivateGuard],
        component: ClientProjectComponent,
      },
    ],
  },
];
