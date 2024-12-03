import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustonInputComponent } from './components/custon-input/custon-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    CustonInputComponent,
    LogoComponent,
    HeaderComponent
  ],
  exports:[CustonInputComponent,
    ReactiveFormsModule,
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class SharedModule { }
