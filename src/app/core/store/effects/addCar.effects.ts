import { AddCar } from './../actions/car.actions';
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
      ofType(fromCarActions.ActionTypes.AddCar),
      switchMap((car) =>  this.carService.addCar(car)),
      map((car => new fromCarActions.AddCarSuccess(car))),
      catchError(error => of(new fromCarActions.AddCarFailed(error)))
    );

  constructor(
    private carService: CarService,
    private readonly actions$: Actions) { }
}
