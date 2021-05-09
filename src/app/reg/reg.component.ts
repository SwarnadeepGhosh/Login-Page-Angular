import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ICountries, RegService } from '../reg.service';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public countries: ICountries[]  = [ ];
  public companies: String[] = [ ];

  regForm: FormGroup;
  submitted = false;
  success = false;

  get userName() {
    return this.regForm.get('userId');
  }
  get password() {
    return this.regForm.get('pass');
  }
  get age(){ return this.regForm.get('age'); }
  get phone(){ return this.regForm.get('phone'); }

  constructor(private fb: FormBuilder,private regService: RegService) {
    this.regForm = this.fb.group({
      name: [''],
      age: ['',[Validators.maxLength(2),Validators.pattern('[0-9]*$')]],
      company: [''],
      country: [''],
      phone: ['',[Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*$')]],
      gender: [''],
      userId: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['']
    }, {validator: PasswordValidator});
  }
  ngOnInit(): void { 
    this.regService.getCountries().subscribe(data => this.countries = data);
    this.regService.getCompanies().subscribe(data => this.companies = data);

  }

  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }
    this.success = true;
    //console.log("submit done");
  }

}
