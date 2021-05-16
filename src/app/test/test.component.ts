import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import {Car} from '../car';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: string = 'TCSer';
  public greeting = "";

  public cars:Car[] = [];

  //for normal injection, constructor(private _carService: CarService) 
  constructor(private _carService: CarService) {
  }

  ngOnInit(): void {
    //for normal injection, this.cars = this._carService.getCars();
    this._carService.getCars().subscribe(data => this.cars = data);
  }

  onClick(event: any) {
    console.log(event);
    this.greeting = "Hello User";
    console.log(event.toElement.value);
    console.log(event.target.value);
  }

  log(value: string) {
    console.log(value);
  }

}


//setTimeout(() => {
    //  this.title = "Learner";
    //}, 2000);