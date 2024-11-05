import { Component } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.page.html',
  styleUrls: ['./agentes.page.scss'],
})
export class AgentesPage {
  agents: any[] = [];
  isLoading = true;

  constructor(private valorantService: ValorantapiService) {}

  

  ionViewWillEnter() {
    this.isLoading = true;  // Inicia la animación de carga

    // Llamada al servicio para obtener los agentes
    this.valorantService.showAgents().subscribe(
      (data) => {
        this.agents = data.data;
        console.log(this.agents);
        this.isLoading = false;  // Detiene la animación de carga
      },
      (error) => {
        console.error('Error al obtener agentes:', error);
        this.isLoading = false;  // Detiene la animación de carga en caso de error
      }
    );
  }
}
