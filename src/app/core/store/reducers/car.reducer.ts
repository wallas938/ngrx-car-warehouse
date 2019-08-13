import { Car } from "@core/models/car";
import * as fromCarActions from "@core/store/actions/car.actions";

export interface State {
  list: Car[];
  carsLoading: boolean;
  isCarsLoaded: boolean;
  carEdditing: boolean;
  carEddited: boolean
}

export const initialState: State = {
  list: [],
  carsLoading: false,
  isCarsLoaded: false,
  carEdditing: false,
  carEddited: false
};

export function reducer(
  state = initialState,
  action: fromCarActions.Actions
): State {
  switch (action.type) {
    case fromCarActions.ActionTypes.LoadCars:
      //console.log('LOAD')
      return {
        ...state,
        carsLoading: true,
        isCarsLoaded: false
      };

    case fromCarActions.ActionTypes.LoadCarsSuccess:
        console.log('LOADED: ', action)
      return {
        ...state,
        list: action.cars,
        carsLoading: false,
        isCarsLoaded: true
      };

      case fromCarActions.ActionTypes.LoadCarsFailed:
        //console.log('LOADED: ', action)
      return {
        ...state,
        carsLoading: false,
        isCarsLoaded: false
      };
      case fromCarActions.ActionTypes.AddCar:
      //console.log('CAR ADDING')
      return {
        ...state,
      };

    case fromCarActions.ActionTypes.AddCarSuccess:
      console.log('CAR ADDED: ')
      return {
        ...state,
      };

      case fromCarActions.ActionTypes.AddCarFailed:
        console.log('ADDING CAR FAILED: ', action)
      return {
        ...state,
      };
      case fromCarActions.ActionTypes.EditCar:
      console.log('EDITING CAR')
      return {
        ...state,
        carEdditing: true,
        carEddited: false
      };

    case fromCarActions.ActionTypes.EditCarSuccess:
      console.log('CAR EDITED: ')
      return {
        ...state,
      };

      case fromCarActions.ActionTypes.EditCarFailed:
        console.log('EDITING CAR FAILED: ', action)
      return {
        ...state,
      };

    default:
      return initialState;
  }
}
