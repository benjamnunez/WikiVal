import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValorantapiService {

  private apiUrl: string='https://valorant-api.com';
  public lenguaje: string='language=es-MX';
  public lenguajeEn: string='language=en-US';
  public apiAgentes: string='/v1/agents?';
  public apiArmas: string='/v1/weapons?'
  public apiMapas: string='/v1/maps?'

  constructor(private http: HttpClient) { }

  showAgents(): Observable<any>{
    console.log('Requesting: ', this.apiUrl+this.apiAgentes+this.lenguaje) // Verificar la URL solicitada
    return this.http.get(this.apiUrl+this.apiAgentes+this.lenguaje)
  }

  showWeapons(): Observable<any>{
    console.log('Requesting: ', this.apiUrl+this.apiArmas+this.lenguaje) // Verificar la URL solicitada
    return this.http.get(this.apiUrl+this.apiArmas+this.lenguaje)
  }

  showMaps(): Observable<any>{
    console.log('Requesting: ', this.apiUrl+this.apiMapas+this.lenguajeEn) // Verificar la URL solicitada
    return this.http.get(this.apiUrl+this.apiMapas+this.lenguajeEn)
  }
}
