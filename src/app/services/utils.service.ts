import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  reloadPage() {
    window.location.reload();
  }

  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})
  }

  loadingUserName(){
    return this.loadingCtrl.create({spinner: 'crescent', duration: 3000})
  }

async takePicture(promptLabelHeader: string) {
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'Seleccione una foto',
    promptLabelPicture:' Toma una foto'
  });
};
//Enruta a cualquier pagina disponible
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // Guarda un elemento en localstorage
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //Obtiene un elemento desde localstorage
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }


}
