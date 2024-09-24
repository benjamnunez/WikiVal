import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValorantapiService {

  private apiUrl: string='https://valorant-api.com';
  public lenguaje: string='language=es-MX';
  public apiAgentes: string='/v1/agents?';
  public apiArmas: string='/v1/weapons?'
  private agentApiUrl = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) { }

  mostrarAgentes(): Observable<any>{
    console.log('Requesting: ', this.apiUrl+this.apiAgentes+this.lenguaje) // Verificar la URL solicitada
    return this.http.get(this.apiUrl+this.apiAgentes+this.lenguaje)
  }

  mostrarArmas(): Observable<any>{
    console.log('Requesting: ', this.apiUrl+this.apiArmas+this.lenguaje) // Verificar la URL solicitada
    return this.http.get(this.apiUrl+this.apiArmas+this.lenguaje)
  }
 

}
