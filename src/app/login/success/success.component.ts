import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
    <div class="jumbotron">
      <h3 class="display-4">Hello, {{loggedInUser}}</h3>
      <p class="lead">This is a secure page</p>
      <hr class="my-4">
      <div class="alert alert-success">
        <p>You have reached this page because you logged in successfully</p>
      </div>
        <p class="lead">
        <a class="btn btn-primary btn-lg" routerLink="/login" role="button">Go Home</a>
      </p>
    </div>
  `,
  styles: [
  ]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedInUser = localStorage.getItem('token');
}
