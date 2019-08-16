import { Car } from './../../core/models/car';
import { Component, OnInit, ChangeDetectionStrategy, Input, Sanitizer, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {

  @Input() cars: Car[]
  @Output() displayCarEditor = new  EventEmitter()
  @Output() removeCarEditor = new  EventEmitter()
  @Output() carRemove = new  EventEmitter()

  displayedColumns: string[] = ['name', 'brand', 'fuelType', 'horsePower', 'price', 'startOfSales', 'endOfSales', 'actions'];
  constructor() {}

  ngOnInit() {
    //console.log('FORM EDIT SHOWED: ', this.oneCarEditing)
  }

  onDisplayCarEditor(car: Car) {
      this.displayCarEditor.emit(car)
  }

  removeHandler(id: number) {
    this.carRemove.emit(id)
  }

}
