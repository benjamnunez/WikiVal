import { Component, OnInit } from '@angular/core';
import { BdlocalService } from "../../services/bdlocal.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

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

  pjRandom: any = { name: '', imgUrl: '' };
  nombrepj: any = '';
  msg: string = '';
  intentos: number = 5;
  isButtonDisabled: boolean = false;
  racha: number = 0;

  constructor(private bdlocalService: BdlocalService) {}  // Inyectar el servicio

  ionViewWillEnter() {
    console.log('La página está a punto de ser visible');
    // Aquí puedes agregar cualquier lógica para preparar la página
  }

  ngOnInit() {
    this.generarPersonajeRandom();
    this.cargarRacha();  // Cargar la racha al iniciar el componente
  }

  generarPersonajeRandom() {
    const indiceAleatorio = Math.floor(Math.random() * this.personajes.length);
    this.pjRandom = this.personajes[indiceAleatorio];
  }

  async enviarDatosJuego() {
    if (this.pjRandom.name == this.nombrepj) {
      this.msg = 'CORRECTO';
      this.generarPersonajeRandom();
      this.intentos = 5;
      this.racha++;
      await this.guardarRacha();  // Guardar la racha cuando se acierte
    } else {
      this.msg = 'ERROR';
      this.intentos--;
      this.racha = 0;
      if (this.intentos === 0) {
        this.msg = 'PERDISTE';
        this.isButtonDisabled = true;
        await this.resetearRacha();  // Guardar la racha también cuando se pierda
      }
    }
  }

  // Guardar la racha en el Storage
  async guardarRacha() {
    await this.bdlocalService.guardarRacha({ intRacha: this.racha });
  }

  // Cargar la racha desde el Storage
  async cargarRacha() {
    const rachaGuardada = await this.bdlocalService.obtenerRacha();
    this.racha = rachaGuardada.intRacha;
  }
  async resetearRacha(){
    this.bdlocalService.resetearRacha();
  }
}
