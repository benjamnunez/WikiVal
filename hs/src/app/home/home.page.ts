import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {
  
  frases:string[]=[
    "Dar no nos empobrece, ni retener nos enriquece",
"¿Supersticiones? No creo en ellas, solo creo en el trabajo.",
"Sólo al conocer el dolor de la derrota podemos aprender a dominar la frustración de un fracaso en la vida diaria",
"Haz siempre lo que te de miedo",
"Incluso si el mundo entero te da la espalda, siempre te tienes a ti mismo.",
"El que lee mucho y anda mucho, ve mucho y sabe mucho.",
"Hay que atreverse a ser grande."
];

  fraseAleatoria:string='';

  login:any;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
            ) {
              this.generarFraseRandom();

    
    //recibo el parametro enviado desde la page Login
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['login'];
        console.log(this.login)
      }
    });
  }
  generarFraseRandom(){
    const indiceAleatorio = Math.floor(Math.random()* this.frases.length);
    this.fraseAleatoria=this.frases[indiceAleatorio];
  }

}
