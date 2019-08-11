import { CarService } from '@core/services/car.service';
import { Observable, Subscription } from 'rxjs';
import { Car } from '@core/models/car';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { State } from '@core/store';
import { LoadCars } from '@core/store/actions/car.actions';
import { map } from 'rxjs/operators';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsListComponent implements OnInit {

  cars$: Observable<Car[]>

  isCarsLoaded$: Observable<boolean>

  carSubscription: Subscription

  constructor(private readonly store: Store<State>) {
    this.cars$ = this.store.select('cars').pipe(map(cars => cars.list))
    this.isCarsLoaded$ = this.store.select('cars').pipe(map(cars => cars.isCarsLoaded))
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadCars())
  }
}
