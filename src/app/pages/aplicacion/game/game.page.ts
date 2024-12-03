import { Component, OnInit } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage  {
  
  racha: number = 0; // Variable para almacenar la racha
  agents: any[] = []; 
  currentAgent: any = null; 
  userGuess: string = ''; 
  message: string = '';

  constructor(private valorantService: ValorantapiService) {}

  ionViewWillEnter() {
    console.log('La página está a punto de ser visible');
    this.loadRacha(); // Cargar la racha guardada al entrar en la página
  }

  ngOnInit() {
    this.loadAgents();
  }

  // Cargar los agentes desde la API
  loadAgents() {
    this.valorantService.showAgents().subscribe(
      (data) => {
        this.agents = data.data
          .filter(agent => agent.isPlayableCharacter && agent.fullPortrait) // Filtrar los agentes válidos
          .map(agent => ({
            ...agent,
            isGuessed: false, // Agregar propiedad para el juego
          }));
        console.log(this.agents);
        this.getNextAgent(); // Obtener el primer agente después de cargar
      },
      (error) => {
        console.error('Error al obtener agentes:', error);
      }
    );
  }

  // Obtener un agente aleatorio
  getNextAgent() {
    if (this.agents.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.agents.length);
      this.message = '';
      this.currentAgent = this.agents[randomIndex];
    } else {
      this.message = '¡Felicidades! Has adivinado todos los agentes.';
      this.currentAgent = null;
    }
  }

  // Verificar si la respuesta del usuario es correcta
  checkGuess() {
    if (this.userGuess.toLowerCase() === this.currentAgent.displayName.toLowerCase()) {
      this.message = '¡Correcto!';
      this.currentAgent.isGuessed = true;
      this.increaseRacha(); // Aumentar la racha
      setTimeout(() => {
        this.agents = this.agents.filter(agent => agent !== this.currentAgent);
        this.userGuess = '';
        this.getNextAgent();
      }, 3000);
    } else {
      this.message = 'Incorrecto. Intenta de nuevo.';
    }
  }

  // Aumentar la racha y guardarla en localStorage
  increaseRacha() {
    this.racha += 1;  // Aumentar la racha
    localStorage.setItem('racha', this.racha.toString()); // Guardar la racha en localStorage
  }

  // Cargar la racha desde localStorage
  loadRacha() {
    const savedRacha = localStorage.getItem('racha');
    if (savedRacha) {
      this.racha = parseInt(savedRacha, 10); // Recuperar la racha guardada
    }
  }
}
