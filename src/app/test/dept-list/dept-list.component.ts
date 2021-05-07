import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <div class="container my-3">
    <h4>
      Department List
    </h4>
    <p>If you click on each department, address bar will append with the <b>ID</b> 
    and content changed to <b>You've selected id = [id-number]</b></p>
    <div class="btn-group-vertical mt-2" role="group">
      <button (click)="onSelect(department)" *ngFor="let department of departments" type="button" class="btn btn-outline-dark m-1">
        {{department.id}} - {{department.name}}
      </button>
    </div>
  <div>
  `,
  styles: [
  ]
})
export class DeptListComponent implements OnInit {
departments = [
  {"id":1, "name":"MEAN Stack"},
  {"id":2, "name":"Data Science"},
  {"id":3, "name":"System Admin"},
  {"id":4, "name":"DevOps"}
];

  constructor(private router : Router) { }
  ngOnInit(): void {
  }

  onSelect(department:any){
    // Navigating to a new route
    this.router.navigate(['/test/departments',department.id]);

  }

}
