import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, selectRecipe }) => {
    return (
        <div className="recipe-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {recipes.map(recipe => (
                <RecipeItem 
                    key={recipe.recipe.label} 
                    recipe={recipe} 
                    selectRecipe={selectRecipe} 
                />
            ))}
        </div>
    );
}

export default RecipeList;
