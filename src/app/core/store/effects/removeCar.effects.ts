import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCarActions from '@core/store/actions/car.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CarService } from '@core/services/car.service';
import { of } from 'rxjs';

@Injectable()
export class RemoveCarEffects {

  @Effect()
  LoadCars$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.RemoveCar),
      switchMap((id) => this.carService.removeCar(id)),
      map(() => new fromCarActions.LoadCars()),
      catchError((error) => of(new fromCarActions.LoadCarsFailed(error)))
    );

  constructor(
    private carService: CarService,
    private readonly actions$: Actions) { }
}