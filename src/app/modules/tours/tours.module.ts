import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { TourlistComponent } from './tourlist/tourlist.component';


@NgModule({
  declarations: [
    TourlistComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule
  ]
})
export class ToursModule { }
