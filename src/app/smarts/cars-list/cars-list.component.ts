import { reducers } from './../../core/store/index';import { CarService } from '@core/services/car.service';
import { Observable, Subscription } from 'rxjs';
import { Car } from '@core/models/car';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { GlobalCarState } from '@core/store';
import * as fromCarActions from '@core/store/actions/car.actions';
import { map } from 'rxjs/operators';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import * as fromStore from '../../core/store/index'
@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsListComponent implements OnInit {

  cars$: Observable<Car[]>

  isCarsLoaded$: Observable<boolean>

  isCarEdited$: Observable<boolean>

  oneCarEditing$: Observable<boolean>

  constructor(private readonly store: Store<GlobalCarState>) {
    this.cars$ = this.store.select(fromStore.getCarsList)
    this.isCarsLoaded$ = this.store.select(fromStore.getCarsLoaded)
    this.oneCarEditing$ = this.store.select(fromStore.getCarEdditing)
    this.isCarEdited$ = this.store.select(fromStore.getCarEddited)
    }

  ngOnInit(): void {
    this.store.dispatch(new fromCarActions.LoadCars())
    console.log(this.cars$)
  }

  showCarEditor(car: Car) {
    this.store.dispatch(new fromCarActions.DisplayCarEditor(car))
  }
}
