import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  slides = [{'image': 'assets/images/home_page/slider-1.png'},
  {'image': 'assets/images/home_page/slider-2.png'}];


  constructor(public dialog: MatDialog, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openDialog() {
     
  }
  openQuote(content: any): any {
    this.modalService.dismissAll();
    this.modalService.open(content);
  }
}
export class DialogContentExampleDialog {}
