import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from "../../services/utils.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  form = new FormGroup({
    image: new FormControl('',[Validators.required])
  })

  utilsvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);

  user = {} as User;

  ngOnInit() {
    
    this.user = this.utilsvc.getFromLocalStorage('user');
  }
//uso de la camara
  async takeImage(): Promise<void> {
    try {
      const result = await this.utilsvc.takePicture('Foto de Perfil');
      console.log('Resultado de takePicture:', result); // Verifica la estructura del objeto resultante
      const dataUrl = result?.dataUrl;
      if (dataUrl) {
        if (this.form && this.form.controls && this.form.controls.image) {
          this.form.controls.image.setValue(dataUrl);
        } else {
          console.error('El control de imagen no está inicializado o no es accesible.');
        }
      } else {
        console.error('dataUrl no está definido en el resultado.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  //Cerrar sesión
  signOut() {
    this.firebaseSvc.signOut();
  }
}  
