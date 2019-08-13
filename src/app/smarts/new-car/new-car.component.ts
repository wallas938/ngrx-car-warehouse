import { Car } from '@core/models/car';
import { AddCar } from './../../core/store/actions/car.actions';
import { State } from './../../core/store/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  Router } from '@angular/router'
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCarComponent implements OnInit {

  constructor(private router: Router,
                  private store: Store<State>) { }

  ngOnInit() {
  }

  addCarHandler(data: Car) {
    this.store.dispatch(new AddCar(data))
    this.router.navigate(['/cars/overview'])
  }

}
