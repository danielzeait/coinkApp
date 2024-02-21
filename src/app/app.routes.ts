import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'get-started',
    loadComponent: () => import('./pages/get-started/get-started.page').then((m) => m.GetStartedComponent),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full',
  },
];