import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiUrl = 'https://api.spoonacular.com';
  private apiKey = 'b0ddf61915504fb9bf60c1d28ef7ce6f'; // Reemplaza con tu clave de API de Spoonacular

  constructor(private http: HttpClient) { }

  // Método para buscar ingredientes con un término específico
  searchIngredients(query: string): Observable<any> {
    const url = `${this.apiUrl}/food/ingredients/search?query=${query}&language=es&apiKey=${this.apiKey}`;
    console.log('Requesting:', url); // Verificar la URL solicitada
    return this.http.get(url);
  }
}
