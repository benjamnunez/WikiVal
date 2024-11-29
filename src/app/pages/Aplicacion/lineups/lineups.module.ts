import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineupsPageRoutingModule } from './lineups-routing.module';

import { LineupsPage } from './lineups.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineupsPageRoutingModule,
    SharedModule
  ],
  declarations: [LineupsPage]
})
export class LineupsPageModule {}
