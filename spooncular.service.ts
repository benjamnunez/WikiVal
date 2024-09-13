import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiUrl: string = 'https://valorant-api.com/v1/agents?language=es-MX';

  constructor(private http: HttpClient) { }

  // Método para buscar ingredientes con un término específico
  mostrarAgentes(): Observable<any> {
    console.log('Requesting:', this.apiUrl); // Verificar la URL solicitada
    return this.http.get(this.apiUrl);
  }
}
