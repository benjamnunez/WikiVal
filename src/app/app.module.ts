import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WeaponSkinsModalComponent } from './shared/components/weapon-skins-modal/weapon-skins-modal.component';
import { IonicStorageModule } from "@ionic/storage-angular";

//Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent, WeaponSkinsModalComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule {}
