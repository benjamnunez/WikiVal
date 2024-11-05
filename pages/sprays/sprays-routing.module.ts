import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpraysPage } from './sprays.page';

const routes: Routes = [
  {
    path: '',
    component: SpraysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpraysPageRoutingModule {}
