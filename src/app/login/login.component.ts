import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string | undefined;
  password: string | undefined;;

  constructor() { }
  ngOnInit(): void { }

  onSubmit() {
    console.log("submit done");
  }

  validateUserId() {
    console.log("validate userid invoked");

  }
  validatePassword() {
    console.log("validate password invoked");
  }
}
