import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './smarts/cars-list/cars-list.component';
import { NewCarComponent } from './smarts/new-car/new-car.component';
import { EditCarComponent } from './smarts/edit-car/edit-car.component';

const routes: Routes = [
  { path: "cars/overview",  component: CarsListComponent},
  { path: "cars/new",  component: NewCarComponent},
  { path: "cars/edit/:id", component: EditCarComponent},
  { path: "",  redirectTo: "cars/overview", pathMatch: "full"},
  { path: "**",  redirectTo: "cars/overview", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
