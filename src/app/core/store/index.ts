import { CarState } from './reducers/car.reducer';
import * as fromCarReducer from '@core/store/reducers/car.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface GlobalCarState {
  cars: fromCarReducer.CarState;
}

export const reducers: ActionReducerMap<GlobalCarState> = {
  cars: fromCarReducer.reducer
};

export const getGlobalState = createFeatureSelector<GlobalCarState>("GlobalCarState")

//cars state
export const getCarState = createSelector(
  getGlobalState, (state: GlobalCarState) => state.cars
)

export const getCarsList = createSelector(
  getCarState, fromCarReducer.getCarsList
)

export const getCurrentCarEdited = createSelector(
  getCarState, fromCarReducer.getCurrentCarEdited
)

export const getCarsLoading = createSelector(
  getCarState, fromCarReducer.getCarsLoading
)

export const getCarsLoaded = createSelector(
  getCarState, fromCarReducer.getCarsLoaded
)

export const getCarEdditing = createSelector(
  getCarState, fromCarReducer.getCarEditing
)

export const getCarEddited = createSelector(
  getCarState, fromCarReducer.getCarEdited
)
