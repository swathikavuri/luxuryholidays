import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourlistComponent } from './tourlist/tourlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: TourlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
