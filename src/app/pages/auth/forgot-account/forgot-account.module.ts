import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotAccountPageRoutingModule } from './forgot-account-routing.module';

import { ForgotAccountPage } from './forgot-account.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotAccountPageRoutingModule,
    SharedModule
  ],
  declarations: [ForgotAccountPage]
})
export class ForgotAccountPageModule {}
