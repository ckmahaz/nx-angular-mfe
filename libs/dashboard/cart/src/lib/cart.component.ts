import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-mfe-cart',
  template: `<div class="remote-entry">
    <h4>This is a Cart Component</h4>
  </div>`,
  styles: [
    `
      .remote-entry {
        padding: 30px;
      }
    `,
  ],
})
export class CartComponent {}
