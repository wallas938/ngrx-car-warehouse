import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field'
import { MatSelect } from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {

  @Output() onAdd = new EventEmitter<any>()

  newCarForm = new FormGroup({
    name: new FormControl('Kango', Validators.required),
    horsePower: new FormControl('75', Validators.required),
    brand: new FormControl('Citroen', Validators.required),
    fuelType: new FormControl('', Validators.required),
    price: new FormControl('10000', Validators.required),
    startOfSales: new FormControl('', Validators.required),
    endOfSales: new FormControl('', Validators.required),
  })

  startOfSales: any
  minDate = new Date()
  maxDate = new Date(2019, 11, 30)

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let newdCarData = {...this.newCarForm.value,
      startOfSales: this.newCarForm.value.startOfSales.toLocaleDateString(),
      endOfSales: this.newCarForm.value.endOfSales.toLocaleDateString(),
    }
    this.onAdd.emit(newdCarData)
  }

}
