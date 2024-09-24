import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotAccountPageRoutingModule } from './forgot-account-routing.module';

import { ForgotAccountPage } from './forgot-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotAccountPageRoutingModule
  ],
  declarations: [ForgotAccountPage]
})
export class ForgotAccountPageModule {}
