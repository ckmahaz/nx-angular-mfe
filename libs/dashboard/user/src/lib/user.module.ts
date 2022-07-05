import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'user',
        component: AddUserComponent
      },
      {
        path: 'products',
        loadChildren: () => import('@nx-angular-mfe/dashboard/products').then(m => m.ProductsModule)
      }
    ])
  ],
  declarations: [UserListComponent, AddUserComponent]
})
export class UserModule {}
