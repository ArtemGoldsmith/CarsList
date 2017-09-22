import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  providers: [CarService]
})


export class CarsListComponent implements OnInit {

  cars: Array<Car>;

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe(resCarData => this.cars = resCarData);
  }
}
