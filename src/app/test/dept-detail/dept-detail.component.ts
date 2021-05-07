import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <div class="container my-3">
      <h4>
        You've selected id = {{departmentId}}
      </h4>
      <button type="button" (click)="goPrevious()" class="btn btn-success m-2">← Previous</button>
      <button type="button" (click)="goNext()" class="btn btn-success m-2">Next →</button>
    <div>
  `,
  styles: [
  ]
})
export class DeptDetailComponent implements OnInit {
  //public departmentId!: String | null;
  public departmentId!: Number ;

  //injecting activated route for getting router from address bar
  constructor(private route: ActivatedRoute, private router: Router) {   }

  ngOnInit(): void {
    //collecting the parameter from address bar and saving into departmentId, will not wirl for previous, next
    //this.departmentId = this.route.snapshot.paramMap.get('id'); 
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.departmentId = parseInt(params.get('id')!);
      //this.departmentId = parseInt(params.get('id')!== null ? params.get('id') : throw new Error('Some error'));
    });
  }

  goPrevious(){
    console.log("previous");
    //let previousId = parseInt(this.departmentId) - 1;
    //this.router.navigate(['/test/departments',previousId]);
  }

  goNext(){
    console.log("next");
    //let nextId = parseInt(this.departmentId) + 1;
    //this.router.navigate(['/test/departments',nextId]);
  }

}
