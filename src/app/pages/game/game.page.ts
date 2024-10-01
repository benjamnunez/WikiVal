import { Block } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {




  personajes = [
    {name : 'kayo' , imgUrl : '../../../assets/gameImg/kayo.png'},
    {name : 'breach' , imgUrl : '../../../assets/gameImg/breach.png'},
    {name : 'skye' , imgUrl : '../../../assets/gameImg/skye.png'},
    {name : 'fade' , imgUrl : '../../../assets/gameImg/fade.png'},
    {name : 'chamber' , imgUrl : '../../../assets/gameImg/chamber.png'},
    {name : 'deadlock' , imgUrl : '../../../assets/gameImg/deadlock.png'},
    {name : 'gekko' , imgUrl : '../../../assets/gameImg/gekko.png'},
    {name : 'cypher' , imgUrl : '../../../assets/gameImg/cypher.png'},
    {name : 'astra' , imgUrl : '../../../assets/gameImg/astra.png'},
    {name : 'harbor' , imgUrl : '../../../assets/gameImg/harbor.png'},
    {name : 'killjoy' , imgUrl : '../../../assets/gameImg/kj.png'},
    {name : 'phoenix' , imgUrl : '../../../assets/gameImg/phoenix.png'},
    {name : 'sova' , imgUrl : '../../../assets/gameImg/sova.png'},
    {name : 'vyper' , imgUrl : '../../../assets/gameImg/vyper.png'},
    {name : 'vyse' , imgUrl : '../../../assets/gameImg/vyse.png'},
  ];

  pjRandom: any={name: '', imgUrl: ''};

  constructor() {
    
  }

  ngOnInit() {
    this.generarPersonajeRandom();
  }
  

  generarPersonajeRandom(){
    const indiceAleatorio = Math.floor(Math.random()* this.personajes.length);
    this.pjRandom=this.personajes[indiceAleatorio];
  }




  nombrepj: any="";
  msg: string="";
  intentos: number=5;
  isButtonDisabled: boolean = false;
  racha: number=0;

  enviarDatosJuego(){
    if (this.pjRandom.name == this.nombrepj) {
      this.msg="CORRECTO";
      this.generarPersonajeRandom();
      this.intentos=5;
      this.racha++;
    } else {
      this.msg="ERROR";
      this.intentos--;
      this.racha=0;
      if (this.intentos===0) {
        this.msg="PERDISTE";
        this.isButtonDisabled = true;
        
      }
    } 
    
  }

}