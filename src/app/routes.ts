import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      pathMatch: 'full'
    }
];
