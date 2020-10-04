import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Pasta','Pene','../assets/pasta.jpg',
        [new Ingredient('espageti',10),new Ingredient('chiken',30),new Ingredient('cheas',90)]),
        new Recipe('Pizza','Italyan','../assets/pizza.jpg',
        [new Ingredient('cheas',30),new Ingredient('sasej',10),new Ingredient('tomato',20)]),
        new Recipe('Lazania','Cream','../assets/lazania.jpg',
        [new Ingredient('Cream',30),new Ingredient('meat',90),new Ingredient('beans',10)])
      ];
      recipesChanged = new Subject<Recipe[]>();
      constructor(private slService: ShoppingListService) {}
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newrecipe: Recipe) {
        this.recipes[index] = newrecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
