import { Component, OnInit } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage  {

  maps: any[]=[];
  isLoading = true;

  constructor(private valorantService : ValorantapiService) { }

  ionViewWillEnter() {
    this.isLoading = true;
    
    this.valorantService.showMaps().subscribe((data) => {
      this.maps = data.data;
      console.log(this.maps)
      this.isLoading = false;
    },
    (error)=>{
      console.error('Error al obtener agentes:', error)
      this.isLoading = false;
    }
  );
  }
}
