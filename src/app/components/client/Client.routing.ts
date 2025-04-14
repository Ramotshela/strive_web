import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './ClientForm/ClientForm.component';

const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent },
];

export const ClientRoutes = RouterModule.forChild(routes);
