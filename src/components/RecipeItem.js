import React, { useState } from 'react';

const RecipeItem = ({ recipe, selectRecipe }) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className={`recipe-item p-6 m-4 cursor-pointer transition transform hover:-translate-y-1 w-72 h-96 flex flex-col justify-between bg-white rounded-xl shadow-lg ${hover ? 'shadow-2xl' : ''}`}
            onClick={() => selectRecipe(recipe)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="max-w-full h-48 object-cover self-center rounded-lg" />
            {hover && (
                <p className="text-md text-center mt-4">{recipe.recipe.cuisineType ? recipe.recipe.cuisineType.join(', ') : ''}</p>
            )}
        </div>
    );
}

export default RecipeItem;
