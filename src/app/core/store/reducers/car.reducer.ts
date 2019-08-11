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
      console.log('LOAD')
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

    default:
      return initialState;
  }
}
