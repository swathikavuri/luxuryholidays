import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Covid19Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
