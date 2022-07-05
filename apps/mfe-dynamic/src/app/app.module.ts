import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/cart', pathMatch: 'full' },
      {
        path: 'cart',
        loadChildren: () => import('@nx-angular-mfe/dashboard/cart').then(m => m.CartModule)
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
