import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field'
import { MatSelect } from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {


  newCarForm = new FormGroup({
    name: new FormControl('', Validators.required),
    horsePower: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    fuelType: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
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
    console.log(this.newCarForm.value)
  }

}
