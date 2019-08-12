import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';

export enum ActionTypes {
  LoadCars = '[Cars] Get cars from API',
  LoadCarsSuccess = '[Cars] Get cars from API Success',
  LoadCarsFailed = '[Cars] Get cars from API Failed',
  AddCars = '[Cars] Add a new car',
  AddCarsSuccess = '[Cars] Add a new car Success',
  AddCarsFailed = '[Cars] Add a new car Failed',
}

export class LoadCars implements Action {
  readonly type = ActionTypes.LoadCars;
}

export class LoadCarsSuccess implements Action {
  readonly type = ActionTypes.LoadCarsSuccess;

  constructor(public cars: Car[]) {}
}

export class LoadCarsFailed implements Action {
  readonly type = ActionTypes.LoadCarsFailed;

  constructor(public error: any) {}
}

export class AddCars implements Action {
  readonly type = ActionTypes.AddCars;
  constructor(public car: Car) {}
}

export class AddCarsSuccess implements Action {
  readonly type = ActionTypes.AddCarsSuccess;

  constructor(public car: Car) {}
}

export class AddCarsFailed implements Action {
  readonly type = ActionTypes.AddCarsFailed;

  constructor(public error: any) {}
}



export type Actions =
  | LoadCars
  | LoadCarsSuccess
  | LoadCarsFailed
  | AddCars
  | AddCarsSuccess
  | AddCarsFailed;
