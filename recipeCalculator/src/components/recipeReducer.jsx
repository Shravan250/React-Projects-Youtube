import React, { act } from "react";

///initial state
export const initialState = {
  ingredients: [
    { name: "Flour", amount: 2, unit: "cups" },
    { name: "Sugar", amount: 1, unit: "cups" },
    { name: "Milk", amount: 1, unit: "liters" },
  ],
  servings: 4,
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SCALE_RECIPE":
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => ({
          ...ingredient,
          amount: ingredient.amount * action.multiplier,
        })),
      };
    case "CONVERT_UNITS":
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => ({
          ...ingredient,
          unit: action.newUnit,
          amount: convertUnits(
            ingredient.amount,
            ingredient.unit,
            action.newUnit
          ),
        })),
      };
    case "UPDATE_SERVINGS":
      const newServings = action.servings;
      const scaleFactor = newServings / state.servings;
      return {
        ...state,
        servings: newServings,
        ingredients: state.ingredients.map((ingredient) => ({
          ...ingredient,
          amount: ingredient.amount * scaleFactor,
        })),
      };
    default:
      return state;
  }
};

const convertUnits = (amount, fromUnit, toUnit) => {
  const conversionRates = {
    cups: { liters: 0.236588 },
    liters: { cups: 4.22675 },
  };

  if (fromUnit === toUnit) return amount;

  const rate = conversionRates[fromUnit][toUnit];
  return (amount * rate).toFixed(2);
};

export default recipeReducer;
