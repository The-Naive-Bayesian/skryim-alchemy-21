import React from 'react';
import {Ingredient} from "../models/Ingredient";

export default function IngredientList({ingredients}: {ingredients: Ingredient[]}) {
  return (
    <ul>
      {
        ingredients.map(ingredient => <li>{ingredient.name}</li>)
      }
    </ul>
  );
}
