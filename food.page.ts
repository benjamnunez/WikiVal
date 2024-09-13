import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from "../spooncular.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
agents: any[]=[];

  constructor(private spoonacularService: SpoonacularService) { }

  ngOnInit() {
    this.mostrarAgents(); 
  }

  mostrarAgents() {

    this.spoonacularService.mostrarAgentes().subscribe((data) =>{
      this.agents=data.data;
      console.log(this.agents)
    } ,
    (error)=>{
      console.error('Error al obtener agentes:', error)
    }
    );
  }

}
