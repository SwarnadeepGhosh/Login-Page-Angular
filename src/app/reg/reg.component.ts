import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountries, RegService } from '../services/reg.service';
import { UserService } from '../services/user.service';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public countries: ICountries[] = [];
  public companies: String[] = [];

  regForm: FormGroup;
  submitted = false;
  success = false;

  get userName() {
    return this.regForm.get('userId');
  }
  get password() {
    return this.regForm.get('pass');
  }
  get age() { return this.regForm.get('age'); }
  get phone() { return this.regForm.get('phone'); }

  constructor(private fb: FormBuilder, private regService: RegService, private userService: UserService) {
    this.regForm = this.fb.group({
      name: [''],
      age: ['', [Validators.maxLength(2), Validators.pattern('[0-9]*$')]],
      company: [''],
      country: [''],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*$')]],
      gender: [''],
      userId: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['']
    }, { validator: PasswordValidator });
  }
  ngOnInit(): void {
    this.regService.getCountries().subscribe(data => this.countries = data);
    this.regService.getCompanies().subscribe(data => this.companies = data);
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.addUser(this.regForm.value);
    //localStorage.setItem('Users',JSON.stringify(this.regForm.value));
    this.regForm.reset();
  }
  addUser(user: any) {
    //Using Localstorage
    let users: any[];
    let localItem: string;

    //checking if localstorage already present, and if present, assining it to users.
    localItem = localStorage.getItem('users');
    if (localItem == null) {
      users = [];
    }
    else {
      users = JSON.parse(localItem);
    }
    //pushing the user to the users Array and saving it into localstorage.
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// this.submitted = true;
// if (this.regForm.invalid) {
//   return;
// }
// this.success = true;