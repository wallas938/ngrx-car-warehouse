import { Car } from "@core/models/car";
import * as fromCarActions from "@core/store/actions/car.actions";

export interface CarState {
  list: Car[];
  currentEditedCar: Car;
  carsLoading: boolean;
  isCarsLoaded: boolean;
  carEditing: boolean;
  carEdited: boolean
}

export const initialState: CarState = {
  list: [],
  currentEditedCar: undefined,
  carsLoading: false,
  isCarsLoaded: false,
  carEditing: false,
  carEdited: false
};

export function reducer(
  state = initialState,
  action: fromCarActions.Actions
): CarState {
  switch (action.type) {
    case fromCarActions.ActionTypes.LoadCars:
      //console.log('LOAD')
      return {
        ...state,
        carsLoading: true,
        isCarsLoaded: false
      };

    case fromCarActions.ActionTypes.LoadCarsSuccess:
        console.log('LOADED: ', action.cars)
      return {
        ...state,
        list: action.cars,
        carsLoading: false,
        isCarsLoaded: true
      };

      case fromCarActions.ActionTypes.LoadCarsFailed:
        //console.log('LOOADING FAILED: ', action)
      return {
        ...state,
        carsLoading: false,
        isCarsLoaded: false
      };
      case fromCarActions.ActionTypes.AddCar:
      console.log('CAR ADDING: ', action.car)
      return {
        ...state,
      };

    case fromCarActions.ActionTypes.AddCarSuccess:
      console.log('CAR ADDED: ', action.car)
      return {
        ...state,
      };

      case fromCarActions.ActionTypes.AddCarFailed:
        //console.log('ADDING CAR FAILED: ', action)
      return {
        ...state,
      };

      case fromCarActions.ActionTypes.DisplayCarEditor:
      console.log('CAR EDITOR SHOWED WITH OLD DATAS', action.car)
      return {
        ...state,
        currentEditedCar: action.car,
        carEditing: true,
        carEdited: false
      };

      case fromCarActions.ActionTypes.RemoveCarEditor:
      console.log('CAR EDITOR REMOVED ')
      return {
        ...state,
        currentEditedCar: undefined,
        carEditing: false,
      };

      case fromCarActions.ActionTypes.EditCar:
      console.log('NEW DATAS SENT', action.car)
      return {
        ...state,
        carEditing: false,
        carEdited: false
      };

    case fromCarActions.ActionTypes.EditCarSuccess:
      console.log('CAR EDITED !', action)
      return {
        ...state,
        carEditing: false,
        carEdited: true
      };

      case fromCarActions.ActionTypes.EditCarFailed:
        console.log('EDITING CAR FAILED: ', action.error)
      return {
        ...state,
        carEditing: false,
        carEdited: false
      };

      case fromCarActions.ActionTypes.RemoveCar:
      console.log('DELETING CAR', action)
      return {
        ...state,
        carEditing: false,
        carEdited: false
      };

    case fromCarActions.ActionTypes.RemoveCarSuccess:
      console.log('CAR REMOVED !', action)
      return {
        ...state,
        carEditing: false,
        carEdited: true
      };

      case fromCarActions.ActionTypes.RemoveCarFailed:
        console.log('DELETING CAR FAILED: ', action)
      return {
        ...state,
        carEditing: false,
        carEdited: false
      };

    default:
      return initialState;
  }
}

export const getCarsList = (state: CarState) => state.list
export const getCurrentCarEdited = (state: CarState) => state.currentEditedCar
export const getCarsLoading = (state: CarState) => state.carsLoading
export const getCarsLoaded = (state: CarState) => state.isCarsLoaded
export const getCarEditing = (state: CarState) => state.carEditing
export const getCarEdited = (state: CarState) => state.carEdited
