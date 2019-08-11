import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
