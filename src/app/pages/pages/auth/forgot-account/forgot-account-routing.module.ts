import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotAccountPage } from './forgot-account.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotAccountPageRoutingModule {}
