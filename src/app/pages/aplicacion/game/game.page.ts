import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage  {

  personajes = [
    { name: 'kayo', imgUrl: '../../../assets/gameImg/kayo.png' },
    { name: 'breach', imgUrl: '../../../assets/gameImg/breach.png' },
    { name: 'skye', imgUrl: '../../../assets/gameImg/skye.png' },
    { name: 'fade', imgUrl: '../../../assets/gameImg/fade.png' },
    { name: 'chamber', imgUrl: '../../../assets/gameImg/chamber.png' },
    { name: 'deadlock', imgUrl: '../../../assets/gameImg/deadlock.png' },
    { name: 'gekko', imgUrl: '../../../assets/gameImg/gekko.png' },
    { name: 'cypher', imgUrl: '../../../assets/gameImg/cypher.png' },
    { name: 'astra', imgUrl: '../../../assets/gameImg/astra.png' },
    { name: 'harbor', imgUrl: '../../../assets/gameImg/harbor.png' },
    { name: 'killjoy', imgUrl: '../../../assets/gameImg/kj.png' },
    { name: 'phoenix', imgUrl: '../../../assets/gameImg/phoenix.png' },
    { name: 'sova', imgUrl: '../../../assets/gameImg/sova.png' },
    { name: 'vyper', imgUrl: '../../../assets/gameImg/vyper.png' },
    { name: 'vyse', imgUrl: '../../../assets/gameImg/vyse.png' },
  ];
  isLoading = false;
  pjRandom: any = { name: '', imgUrl: '' };
  nombrepj: any = '';
  msg: string = '';
  intentos: number = 5;
  isButtonDisabled: boolean = false;
  racha: number = 0;

  constructor() {}  // Inyectar el servicio

  ionViewWillEnter() {
    console.log('La página está a punto de ser visible');
    // Aquí puedes agregar cualquier lógica para preparar la página
  }

  ngOnInit() {
  }

  // Guardar la racha en el Storage

}
