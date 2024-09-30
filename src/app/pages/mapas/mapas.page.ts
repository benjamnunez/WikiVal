import { Component, OnInit } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  maps: any[]=[];

  constructor(private valorantService : ValorantapiService) { }

  ngOnInit() {
    this.mostrarMapas();
  }

  mostrarMapas(){
    this.valorantService.showMaps().subscribe((data) => {
      this.maps = data.data;
      console.log(this.maps)
    },
    (error)=>{
      console.error('Error al obtener agentes:', error)
    }
  );
  }
}
