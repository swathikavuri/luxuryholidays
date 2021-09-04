import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-weddingslist',
  templateUrl: './weddingslist.component.html',
  styleUrls: ['./weddingslist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeddingslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
