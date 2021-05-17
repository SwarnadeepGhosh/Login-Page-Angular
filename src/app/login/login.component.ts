import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasSubmitted: boolean;

  get username(){ return this.loginForm.get('username'); }
  get password(){ return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder, private authService: AuthService, private router : Router) {
    this.loginForm = this.fb.group({
      username : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      password : ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    this.hasSubmitted = true;
    //console.log(this.loginForm.value);
    const user = this.authService.authUser(this.loginForm.value);
    if (this.loginForm.valid) {
      if(user){ //if user have some value it will check and validate
        alertify.success('You have logged in successfully');
        this.router.navigate(['/success']);
      }
      else{ //if user is null or incorrect
        alertify.error('Please enter correct credentials')
      }
      
      this.loginForm.reset();
      this.hasSubmitted = false;
    }
    else{
      alertify.error('Kindly fill required fields');
    }
  }

}
