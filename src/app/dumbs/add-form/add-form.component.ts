import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatFormField } from '@angular/material/form-field'
import { MatSelect } from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {

  startOfSales: any
  minDate = new Date()
  maxDate = new Date(2019, 11, 30)

  constructor() { }

  ngOnInit() {
  }

}
