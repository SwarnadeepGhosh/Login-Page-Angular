import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public countries = ["Afghanistan","Albania","Algeria"];
  constructor() { }

  ngOnInit(): void {
  }
/*
{
      "country": "Afghanistan"
    },
    {
      "country": "Albania"
    },
    {
      "country": "Algeria"
    }
*/


}
