import { AddCarEffects } from './store/effects/addCar.effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCarService } from './services/in-memory-car.service';
import { CarService } from './services/car.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromCore from '@core/store';
import * as fromEffects from './store/effects/index'

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCarService),
    StoreModule.forFeature("GlobalCarState", fromCore.reducers),
    EffectsModule.forRoot([fromEffects.addCarEffects, fromEffects.carEffects, fromEffects.editCarEffects, fromEffects.removeCarEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Simplon Exercise',
      maxAge: 50
    }),
  ],
  providers: [
    CarService
  ]
})
export class CoreModule { }
