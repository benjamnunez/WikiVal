import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdlocalService } from 'src/app/services/bdlocal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //modelo login que permita obtener la info. de username y password
  login:any={
    username:"",
    password:""
  }
  //variable para obtener el nombre del campo vacío
  field:string="";
  constructor(
    public router: Router,
    public toastController:ToastController,
    private bdlocal : BdlocalService
  ) { }

  ngOnInit() {
  }

  ingresar(){
    if(this.validateModel(this.login)){
      //agrego creación de parámetros
      let navigationExtras : NavigationExtras = {
        state:{login: this.login}
      };
      const usuario = this.login.username
      console.log(usuario)
      this.bdlocal.guardarUsuario(usuario, true);
      this.router.navigate(['/tabs/home'], navigationExtras);
      this.presentToast("top","Bienvenido "+ this.login.username,1500)
    }else{
      this.presentToast("middle","Error - Falta: "+this.field);
    }    
  }

  recoveryAcc(){
    this.router.navigate(['forgot-account'])
  }

  /**
   * validateModel para validar el ingreso de algo en los
   * campos de mi html mediante el modelo login
   */
  validateModel(model:any){
    //Recorro todas las entradas que me entrega el Object entries obteniendo
    //el par key : value
    for(var [key ,value] of Object.entries(model)){
      //reviso si value = "" y retorno false e indico campo faltante
      if(value == ""){
        this.field = key;
        return false;
      }
    } 
    //si termina el for es que los valores fueron ingresados
    return true;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }

}