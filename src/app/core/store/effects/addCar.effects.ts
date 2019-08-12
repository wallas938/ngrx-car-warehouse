import { AddCars } from './../actions/car.actions';
import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCarActions from '@core/store/actions/car.actions';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { CarService } from '@core/services/car.service';
import { of } from 'rxjs';
@Injectable()
export class AddCarEffects {

  @Effect({ dispatch: true })
  AddCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.AddCars),
      switchMap((car) =>  this.carService.addCar(car)),
      map((car => new fromCarActions.AddCarsSuccess(car)))
    );

  constructor(
    private carService: CarService,
    private readonly actions$: Actions) { }

     /*
      ofType(fromCarActions.ActionTypes.LoadCars),
      switchMap(() => this.carService.getCars()),
      map((cars) => new fromCarActions.LoadCarsSuccess(cars)),
      catchError((error) => of(new fromCarActions.LoadCarsFailed(error)))
     */
}
