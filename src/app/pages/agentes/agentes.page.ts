import { Component, OnInit } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';
//import {  } from "../";


@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.page.html',
  styleUrls: ['./agentes.page.scss'],
})
export class AgentesPage implements OnInit {
agents: any[]=[];
  
  constructor(private valorantService: ValorantapiService) { }

  ngOnInit() {
    this.mostrarAgents();
  }
  mostrarAgents(){
    this.valorantService.showAgents().subscribe((data) =>{
      this.agents=data.data;
      console.log(this.agents)
    } , 
    (error)=>{
      console.error('Error al obtener agentes:', error)
    }
    );
  }



}
