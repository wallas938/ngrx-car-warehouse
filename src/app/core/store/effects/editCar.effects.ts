import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCarActions from '@core/store/actions/car.actions';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { CarService } from '@core/services/car.service';
import { of } from 'rxjs';
@Injectable()
export class EditCarEffects {

  @Effect({ dispatch: true })
  EditCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.EditCar),
      switchMap((data) =>  this.carService.editCar(data)),
      map((() => new fromCarActions.LoadCars())),
      catchError(error => of( new fromCarActions.EditCarFailed(error)))
    );

  constructor(
    private carService: CarService,
    private readonly actions$: Actions) { }
}
