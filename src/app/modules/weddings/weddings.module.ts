import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingsRoutingModule } from './weddings-routing.module';
import { WeddingslistComponent } from './weddingslist/weddingslist.component';


@NgModule({
  declarations: [
    WeddingslistComponent
  ],
  imports: [
    CommonModule,
    WeddingsRoutingModule
  ]
})
export class WeddingsModule { }
