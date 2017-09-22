import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
  providers: [CarService]
})

export class CarInfoComponent implements OnInit {

  car: Array<Car>;

  constructor(private route: ActivatedRoute, private _carService: CarService) {}

  ngOnInit() {
    this.getCarDetail(this.route.snapshot.params['id']);
  }
  getCarDetail(id) {
    this._carService.getCar(id)
      .subscribe(resCarData => this.car = resCarData);
  }
}


