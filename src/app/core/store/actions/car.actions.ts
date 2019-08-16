import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';

export enum ActionTypes {
  LoadCars = '[Cars] Get cars from API',
  LoadCarsSuccess = '[Cars] Get cars from API Success',
  LoadCarsFailed = '[Cars] Get cars from API Failed',
  AddCar = '[Cars] Add a new car into Server',
  AddCarSuccess = '[Cars] Add a new car into Server Success',
  AddCarFailed = '[Cars] Add a new car into Server Failed',
  EditCar = '[Cars] Edit one car in Server',
  EditCarSuccess = '[Cars] Edit one car in Server Success',
  EditCarFailed = '[Cars] Edit one car in Server Failed',
  RemoveCar = '[Cars] Remove one car from Api',
  RemoveCarSuccess = '[Cars] Remove one car from Api Success',
  RemoveCarFailed = '[Cars] Remove one car from Api Failed',
  DisplayCarEditor = '[Cars] Display form Editor',
  CarEditorDisplayed = '[Cars] Form Editor Displayed', // never used
  RemoveCarEditor = '[Cars] Form Editor Removed',

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

export class AddCar implements Action {
  readonly type = ActionTypes.AddCar;
  constructor(public car: Car) {}
}

export class AddCarSuccess implements Action {
  readonly type = ActionTypes.AddCarSuccess;

  constructor(public car: Car) {}
}

export class AddCarFailed implements Action {
  readonly type = ActionTypes.AddCarFailed;

  constructor(public error: string) {}
}

export class EditCar implements Action {
  readonly type = ActionTypes.EditCar;
  constructor(public car: Car) {} // new datas
}

export class EditCarSuccess implements Action {
  readonly type = ActionTypes.EditCarSuccess;

  constructor() {}
}

export class EditCarFailed implements Action {
  readonly type = ActionTypes.EditCarFailed;

  constructor(public error: string) {}
}

export class DisplayCarEditor implements Action {
  readonly type = ActionTypes.DisplayCarEditor;

  constructor(public car: Car) {} //old datas
}

export class CarEditorDisplayed implements Action {
  readonly type = ActionTypes.CarEditorDisplayed;

  constructor() {}
}

export class RemoveCarEditor implements Action {
  readonly type = ActionTypes.RemoveCarEditor;

  constructor() {}
}

export class RemoveCar implements Action {
  readonly type = ActionTypes.RemoveCar

  constructor(public id: number) {}
}

export class RemoveCarSuccess implements Action {
  readonly type = ActionTypes.RemoveCarSuccess

  constructor() {}
}

export class RemoveCarFailed implements Action {
  readonly type = ActionTypes.RemoveCarFailed

  constructor() {}
}



export type Actions =
  | LoadCars
  | LoadCarsSuccess
  | LoadCarsFailed
  | AddCar
  | AddCarSuccess
  | AddCarFailed
  | EditCar
  | EditCarSuccess
  | EditCarFailed
  | DisplayCarEditor
  | CarEditorDisplayed
  | RemoveCarEditor
  | RemoveCar
  | RemoveCarSuccess
  | RemoveCarFailed;
