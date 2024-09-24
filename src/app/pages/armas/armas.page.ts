import { Component, OnInit } from '@angular/core';
import { ValorantapiService } from 'src/app/services/valorantapi.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.page.html',
  styleUrls: ['./armas.page.scss'],
})
export class ArmasPage implements OnInit {
guns: any[]=[];

  constructor(private valorantService: ValorantapiService) { }

  ngOnInit() {
    this.mostrarGuns();
  }

  mostrarGuns(){
    this.valorantService.mostrarArmas().subscribe((data)=>{
      this.guns=data.data;
      console.log(this.guns)
    },
    (error)=>{
      console.error('Error al obtener Arma:', error)
    }
  )
  };

}
