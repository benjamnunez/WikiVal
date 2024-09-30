import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValorantapiService } from 'src/app/services/valorantapi.service';
import { WeaponSkinsModalComponent } from '../weapon-skins-modal/weapon-skins-modal.component';


@Component({
  selector: 'app-armas',
  templateUrl: './armas.page.html',
  styleUrls: ['./armas.page.scss'],
})
export class ArmasPage implements OnInit {
guns: any[]=[];
skins: number[]=[1,2];
skinAleatoria:string='';

  constructor(
    private valorantService: ValorantapiService,
    private modalController: ModalController
  ) {
    }

  ngOnInit() {
    this.valorantService.showWeapons().subscribe((data: any) => {
      this.guns = data.data;
      console.log(this.guns); // Verifica que los datos sean correctos
    });
  }

  

  async openSkinsModal(gun: any) {
    const modal = await this.modalController.create({
      component: WeaponSkinsModalComponent,
      componentProps: {
        skins: gun.skins // Pasar las skins del arma seleccionada al modal
      }
    });
    return await modal.present();
  
}

   indiceAleatorio = Math.floor(Math.random() * this.skins.length);



}