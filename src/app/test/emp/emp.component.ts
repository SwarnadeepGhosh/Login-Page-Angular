import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  template: `
  <div class="container my-3">
    <h4>
      Employees component is working !!
    </h4>
  <div>
  `,
  styles: [
  ]
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
