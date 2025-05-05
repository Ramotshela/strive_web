import { EmployeeComponent } from './components/employee/employee.component';
import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './Guards/guards/auth.guard';
import { canDeactivateGuard } from './Guards/guards/can-deactivate.guard';
import { ClientFormComponent } from './components/client/ClientForm/ClientForm.component';
import { ClientProjectFormComponent } from './components/client-project-form/client-project-form.component';
import { PaymentComponent } from './components/payment/payment.component';

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
        
      },{
            path: 'client-form',
            component: ClientFormComponent,
          },
      {
        path: 'client-project',
        canDeactivate: [canDeactivateGuard],
        component: ClientProjectComponent,
      },
      {
        path: 'client-project-form',
        component: ClientProjectFormComponent,
      },
      { path: 'payment', component: PaymentComponent },
      {
        path: '**',
        redirectTo: 'login', // or a NotFoundComponent
      },
    ],
  },
];
