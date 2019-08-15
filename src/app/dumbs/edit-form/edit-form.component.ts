import { Car } from '@core/models/car';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit {
  @Input() oldCarData: Car
  @Output() removeCarEditor = new EventEmitter()
  @Output() editCar = new EventEmitter()

  editCarForm = new FormGroup({
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
  constructor() {
  }

  ngOnInit() {
    this.editCarForm.controls['name'].setValue(this.oldCarData.name)
    this.editCarForm.controls['horsePower'].setValue(this.oldCarData.horsePower)
    this.editCarForm.controls['brand'].setValue(this.oldCarData.brand)
    this.editCarForm.controls['fuelType'].setValue(this.oldCarData.fuelType)
    this.editCarForm.controls['price'].setValue(this.oldCarData.price)
    this.editCarForm.controls['startOfSales'].setValue(new Date(this.oldCarData.startOfSales))
    this.editCarForm.controls['endOfSales'].setValue(new Date(this.oldCarData.endOfSales))
  }


  onCancel() {
    this.removeCarEditor.emit()
  }

  onSubmit() {
    const carEdited = {...this.editCarForm.value, id: this.oldCarData.id}
    this.editCar.emit(carEdited)
  }

}
