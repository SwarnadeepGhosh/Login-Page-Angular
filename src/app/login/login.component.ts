import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  success = false;

  get userName(){
    return this.myForm.get('userId');
  }

  get password(){
    return this.myForm.get('pass');
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userId : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      pass : ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.success = true;
    //console.log("submit done");
  }

}
