import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from "../spooncular.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  ingredients: any[] = [];
  miLista: { ingredient: any, cantidad: number }[] = [];
  searchTerm: string = '';
  quantities: { [key: number]: number } = {};

  constructor(private spoonacularService: SpoonacularService) { }

  ngOnInit() {
    this.searchIngredients(); 
  }

  searchIngredients() {
    if (this.searchTerm.trim() !== '') {
      this.spoonacularService.searchIngredients(this.searchTerm).subscribe(
        response => {
          console.log('Ingredientes encontrados:', response);
          this.ingredients = response.results;
        },
        error => {
          console.error('Error al buscar ingredientes:', error);
        }
      );
    } else {
      console.log('Por favor, ingrese un término de búsqueda.');
    }
  }

  addToMiLista(ingredient: any) {
    const itemExistente = this.miLista.find(item => item.ingredient.id === ingredient.id);
    const añadirCant = this.quantities[ingredient.id] || 1;

    if (itemExistente) {
      itemExistente.cantidad += añadirCant;
      console.log(`Cantidad de ${ingredient.name} incrementada a ${itemExistente.cantidad}`);
    } else {
      this.miLista.push({ ingredient: ingredient, cantidad: añadirCant });
      console.log(`Ingrediente ${ingredient.name} agregado a miLista con cantidad ${añadirCant}`);
    }

    this.quantities[ingredient.id] = 0;
  }

  updateQuantity(ingredientId: number, value: any) {
    const quantity = Number(value);
    if (!isNaN(quantity) && quantity > 0) {
      this.quantities[ingredientId] = quantity;
    } else {
      this.quantities[ingredientId] = 0;
    }
  }
}
