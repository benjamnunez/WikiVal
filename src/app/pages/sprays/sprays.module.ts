import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpraysPageRoutingModule } from './sprays-routing.module';

import { SpraysPage } from './sprays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpraysPageRoutingModule
  ],
  declarations: [SpraysPage]
})
export class SpraysPageModule {}
