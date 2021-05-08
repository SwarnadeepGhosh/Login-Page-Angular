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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userId : ['',[Validators.required, Validators.minLength(3)]],
      pass : ['']
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
