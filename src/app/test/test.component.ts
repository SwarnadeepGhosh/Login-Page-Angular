import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title:string = 'TCSer';

  constructor() { 
    setTimeout(() => {
      this.title = "Learner";
    }, 2000);
  }

  ngOnInit(): void {
  }

}
