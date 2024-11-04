import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmasPageRoutingModule } from './armas-routing.module';
import { ArmasPage } from './armas.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmasPageRoutingModule,
    SharedModule
  ],
  declarations: [ArmasPage]

})
export class ArmasPageModule {}
