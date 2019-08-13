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

  @Input() cars: any[]
  @Output() displayEditForm = new  EventEmitter()

  displayedColumns: string[] = ['name', 'brand', 'fuelType', 'horsePower', 'price', 'startOfSales', 'endOfSales', 'actions'];
  constructor(private matIcon: MatIconRegistry,
              private sanitizer: DomSanitizer) {
                this.matIcon.addSvgIcon(
                  'pencil',
                  this.sanitizer.bypassSecurityTrustResourceUrl('/assets/pencil.svg')
                )
              }

  ngOnInit() {

  }

  displayFormEditer(id: number, car: Car) {
    this.displayEditForm.emit({id, car})
  }

}
