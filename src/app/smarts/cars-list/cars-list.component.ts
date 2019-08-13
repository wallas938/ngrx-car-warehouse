import { CarService } from '@core/services/car.service';
import { Observable, Subscription } from 'rxjs';
import { Car } from '@core/models/car';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { State } from '@core/store';
import { LoadCars, EditCar } from '@core/store/actions/car.actions';
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

  isCarEdited$: Observable<boolean>

  oneCarEditing$: boolean = false

  carSubscription: Subscription

  constructor(private readonly store: Store<State>) {
    this.cars$ = this.store.select('cars').pipe(map(cars => cars.list))
    }

  ngOnInit(): void {
    this.store.dispatch(new LoadCars())
  }

  showEditForm(data: any) {
    this.store.dispatch(new EditCar(data))
    this.oneCarEditing$ = true
  }
}
