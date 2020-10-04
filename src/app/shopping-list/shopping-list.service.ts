import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',3),
        new Ingredient('Orange',3)
      ];
      // ingredientsChanged = new EventEmitter<Ingredient[]>();
      ingredientsChanged = new Subject<Ingredient[]>();
      startedEditing = new Subject<number>();
      getIngredients() {
          return this.ingredients.slice();
      }
      getIngredient(index: number) {
        return this.ingredients[index];
    }
      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          //because we return a copy of array(slice) when we add the actual ingredients we can't saw it fo solve this problem we wrote this event and subscribe it in shopping-list component
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index: number) {
          this.ingredients.splice(index, 1);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient[]) {
        // for(let Woak of ingredients) {
        //     this.addIngredient(Woak);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}
