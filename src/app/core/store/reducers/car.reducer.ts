import { Car } from "@core/models/car";
import * as fromCarActions from "@core/store/actions/car.actions";

export interface State {
  list: Car[];
  carsLoading: boolean;
  isCarsLoaded: boolean;
}

export const initialState: State = {
  list: [],
  carsLoading: false,
  isCarsLoaded: false
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
      case fromCarActions.ActionTypes.AddCars:
      //console.log('CAR ADDING')
      return {
        ...state,
      };

    case fromCarActions.ActionTypes.AddCarsSuccess:
      console.log('CAR ADDED: ')
      return {
        ...state,
      };

      case fromCarActions.ActionTypes.AddCarsFailed:
        console.log('ADDING CAR FAILED: ', action)
      return {
        ...state,
      };

    default:
      return initialState;
  }
}
