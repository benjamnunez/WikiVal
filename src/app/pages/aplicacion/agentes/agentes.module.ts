// agentes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgentesPageRoutingModule } from './agentes-routing.module';
import { AgentesPage } from './agentes.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentesPageRoutingModule,
    SharedModule
  ],
  declarations: [AgentesPage]
})
export class AgentesPageModule {}
