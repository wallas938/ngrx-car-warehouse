import { Car } from '@core/models/car';
import { Observable } from 'rxjs';
import { RemoveCarEditor } from './../../core/store/actions/car.actions';
import { GlobalCarState } from '@core/store';
import { Store } from '@ngrx/store';
import * as fromStore from '../../core/store/index'
import * as fromCarActions from '../../core/store/actions/car.actions'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCarComponent implements OnInit {

  oldCarData$: Observable<Car>

  constructor(private store: Store<GlobalCarState>) {
    this.oldCarData$ = this.store.select(fromStore.getCurrentCarEdited)
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  onEditCar(carEdited: Car) {
    this.store.dispatch(new fromCarActions.EditCar(carEdited))

  }

  onRemoveCarEditor() {
    this.store.dispatch(new RemoveCarEditor())
  }

}
