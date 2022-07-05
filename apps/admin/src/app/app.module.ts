
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () => import('@nx-angular-mfe/dashboard/user').then(m => m.UserModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:8000/remoteEntry.js',
          remoteName: 'mfe_dynamic',
          exposedModule: './Cart'
        }).then(m => m.CartModule).catch( err => console.log('Oh no!', err) )
      }  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
