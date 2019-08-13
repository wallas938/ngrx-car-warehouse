import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit {
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


  onCancel() {

  }

  onSubmit() {

  }

}
