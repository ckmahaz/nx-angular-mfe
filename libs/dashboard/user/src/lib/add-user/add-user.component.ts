import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-mfe-add-user',
  template: `<div class="remote-entry">
    <button routerLink="/admin">Back</button>
    <h4>Add User's Component</h4>
  </div>`,
  styles: [
    `
      .remote-entry {
        padding: 30px;
      }
    `,
  ],
})
export class AddUserComponent {}
