import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-mfe-home',
  template: `   
    <style>
    .home-wrapper{
      padding: 30px;
    }
    </style>
    <div class="home-wrapper"><h4>This is Home Component</h4></div>
  `,
  styleUrls: [],
})
export class HomeComponent {
  constructor() {}
}
