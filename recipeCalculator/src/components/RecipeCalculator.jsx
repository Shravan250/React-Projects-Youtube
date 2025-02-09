import React, { useReducer, useState } from "react";
import recipeReducer, { initialState } from "./recipeReducer";
import "./styles.css";
const RecipeCalculator = () => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const [servingValue, setServingValue] = useState("");

  const handleScaleRecipe = (multiplier) => {
    dispatch({ type: "SCALE_RECIPE", multiplier });
  };

  const handleConvertUnits = (newUnit) => {
    dispatch({ type: "CONVERT_UNITS", newUnit });
  };

  const handleUpdateServings = (e) => {
    e.preventDefault();
    if (servingValue > 0) {
      dispatch({ type: "UPDATE_SERVINGS", servings: servingValue });
    }
    setServingValue("");
  };

  return (
    <div className="container">
      <h1>Recipe Calculator</h1>
      <div className="ingredients-list">
        <h2>Ingredients</h2>
        <ul>
          {state.ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>{ingredient.name}</span>
              <span>
                {ingredient.amount} {ingredient.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleUpdateServings} className="servings-input">
        <label>
          Servings:
          <input
            type="number"
            placeholder={state.servings}
            value={servingValue}
            onChange={(e) => setServingValue(e.target.value)}
            min="1"
          />
        </label>
        <button className="submit-btn" type="submit">
          update
        </button>
      </form>

      <div className="controls">
        <button onClick={() => handleScaleRecipe(2)}>Double Recipe</button>
        <button onClick={() => handleScaleRecipe(0.5)}>Halve Recipe</button>
        <button onClick={() => handleConvertUnits("cups")}>
          Convert to Cups
        </button>
        <button onClick={() => handleConvertUnits("liters")}>
          Convert to Liters
        </button>
      </div>
    </div>
  );
};

export default RecipeCalculator;
