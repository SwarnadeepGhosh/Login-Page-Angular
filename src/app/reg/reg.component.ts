import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public countries: { country: string; }[]  = [ ];

  public companies: string[] = [
    "Wal-Mart Stores",
    "Exxon Mobil",
    "Tata Consultancy Services Ltd",
    "Infosys Ltd.",
    "Berkshire Hathaway",
    "Apple",
    "Phillips 66",
    "General Motors",
    "Ford Motor",
    "General Electric",
    "Microsoft"
  ];

  regForm: FormGroup;
  submitted = false;
  success = false;

  get userName() {
    return this.regForm.get('userId');
  }

  get password() {
    return this.regForm.get('pass');
  }

  constructor(private fb: FormBuilder,private regService: RegService) {
    this.regForm = this.fb.group({
      name: [''],
      age: [''],
      company: [''],
      country: [''],
      phone: [''],
      gender: [''],
      userId: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['']
    });
  }
  ngOnInit(): void { 
    this.countries = this.regService.getCountries();
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
