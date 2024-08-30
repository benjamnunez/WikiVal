import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login:any;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    //recibo el parametro enviado desde la page Login
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        console.log(this.login)
      }
    });
  }

}
