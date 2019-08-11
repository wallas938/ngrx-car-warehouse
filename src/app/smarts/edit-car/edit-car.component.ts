import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
