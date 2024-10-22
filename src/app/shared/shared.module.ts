import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustonInputComponent } from './custon-input/custon-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    CustonInputComponent,
    LogoComponent
  ],
  exports:[CustonInputComponent,
    ReactiveFormsModule,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class SharedModule { }
