import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasSubmitted: boolean;

  get userName(){ return this.loginForm.get('userId'); }
  get password(){ return this.loginForm.get('pass'); }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userId : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      pass : ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    this.hasSubmitted = true;
    if (this.loginForm.valid) {
      alertify.success('You have logged in successfully');
      this.loginForm.reset();
      this.hasSubmitted = false;
    }
    else{
      alertify.error('Kindly provide proper credentials');
    }
  }

}
