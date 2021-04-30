import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //userId: string | undefined;
  //password: string | undefined;;

  myForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\-]+$')]],
      pass: ['', Validators.required]
    })
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

  /*
  validateUserId() {
    console.log("validate userid invoked");
  }
  validatePassword() {
    console.log("validate password invoked");
  }
  */
}
