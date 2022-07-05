import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('@nx-angular-mfe/dashboard/user').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/User').then(m => m.UserModule)
  }  
];