import { CarEffects } from './core/store/effects/car.effects';
import { reducers } from './core/store/index';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/***** start Angular components start *****/
import { CarsListComponent } from './smarts/cars-list/cars-list.component';
import { NewCarComponent } from './smarts/new-car/new-car.component';
import { EditCarComponent } from './smarts/edit-car/edit-car.component';
import { CarComponent } from './dumbs/car/car.component';
import { AddFormComponent } from './dumbs/add-form/add-form.component';
import { EditFormComponent } from './dumbs/edit-form/edit-form.component';
/***** end Angular components end *****/

/***** start Angular material components start *****/
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
/***** end Angular material components end *****/
@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    NewCarComponent,
    EditCarComponent,
    CarComponent,
    AddFormComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
