import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingslistComponent } from './weddingslist/weddingslist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: WeddingslistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingsRoutingModule { }
