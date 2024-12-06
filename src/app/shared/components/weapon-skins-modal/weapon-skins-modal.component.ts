import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-weapon-skins-modal',
  templateUrl: './weapon-skins-modal.component.html',
  styleUrls: ['./weapon-skins-modal.component.scss'],
})
export class WeaponSkinsModalComponent {
  
  isLoading = true;
  @Input() skins: any[] = []; // Recibir las skins del arma seleccionada
  

  constructor(private modalController: ModalController) {}
  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoading = false;
      console.log("desaparece");
    }, 500);

  }
  dismiss() {
    this.modalController.dismiss();
}
}
