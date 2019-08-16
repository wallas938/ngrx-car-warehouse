import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '@core/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly baseUrl = 'api/cars/';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl)
  }

  addCar(car: any): Observable<Car>  {
    return this.http.post<Car>(this.baseUrl, car.car).pipe(
      map((car) => car)
    )
  }

  editCar(editedCarData: any): Observable<Car>  {
    console.log(editedCarData.car)
    return this.http.put<Car>(this.baseUrl+editedCarData.car.id, editedCarData.car)
  }

  removeCar(carToRemove: any): Observable<Car> {
    return this.http.delete<Car>(this.baseUrl+carToRemove.id)
  }
}
