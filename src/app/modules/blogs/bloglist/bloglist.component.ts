import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BloglistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
