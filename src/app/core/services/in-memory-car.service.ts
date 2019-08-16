import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../models/car';
import { FuelType } from '../models/fuel-type';
import { Brand } from '@core/models/brand';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCarService implements InMemoryDbService {

  createDb() {
    const cars: Car[] = [
      {
        id: 1,
        name: 'Clio',
        brand: Brand.Renault,
        fuelType: FuelType.Gasoline,
        horsePower: 100,
        price: 17500,
        startOfSales: '08/01/2010',
        endOfSales: '07/31/2020'
      },
      {
        id: 2,
        name: 'Zoe',
        brand: Brand.Renault,
        fuelType: FuelType.Electric,
        horsePower: 92,
        price: 25000,
        startOfSales: '01/01/2012',
        endOfSales: '12/31/2024'
      },
      {
        id: 3,
        name: 'Twingo',
        brand: Brand.Renault,
        fuelType: FuelType.Gasoline,
        horsePower: 75,
        price: 12500,
        startOfSales: '05/01/2000',
        endOfSales: '04/31/2014'
      },
      {
        id: 4,
        name: 'Duster',
        brand: Brand.Dacia,
        fuelType: FuelType.Gasoline,
        horsePower: 115,
        price: 19150,
        startOfSales: '09/01/2008',
        endOfSales: '08/31/2015'
      },
      {
        id: 5,
        name: 'Sandero',
        brand: Brand.Dacia,
        fuelType: FuelType.Gasoline,
        horsePower: 95,
        price: 13750,
        startOfSales: '02/01/2004',
        endOfSales: '01/31/2015'
      },
      {
        id: 6,
        name: 'A110',
        brand: Brand.Alpine,
        fuelType: FuelType.Gasoline,
        horsePower: 252,
        price: 40000,
        startOfSales: '01/01/2018',
        endOfSales: '12/31/2030'
      },
    ];

    return { cars };
  }
}
