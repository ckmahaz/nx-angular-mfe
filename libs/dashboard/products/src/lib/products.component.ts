import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-mfe-products',
  template: `<div class="remote-entry">
    <button routerLink="/admin">Back</button>
    <h4>Products' Remote Entry Component</h4>
  </div>`,
  styles: [
    `
      .remote-entry {
        padding: 30px;
      }
    `,
  ],
})
export class ProductsComponent {}
