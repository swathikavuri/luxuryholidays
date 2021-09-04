import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
