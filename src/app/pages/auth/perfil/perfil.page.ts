import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  form = new FormGroup({
    image: new FormControl('',[Validators.required])
  })

  constructor(public router: Router) { }

  utilsvc = inject(UtilsService)

  ngOnInit() {
  }

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
  agentesGame(){
    this.router.navigate(['/game'])
  }
}  
