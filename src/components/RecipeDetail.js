import React from 'react';

const RecipeDetail = ({ recipe, closeDetail }) => {
    return (
        <div className="recipe-detail max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
            <button onClick={closeDetail} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
            <h2 className="text-3xl font-bold mb-6 text-center">{recipe.recipe.label}</h2>
            <div className="flex justify-center mb-6">
                <img src={recipe.recipe.image} alt={recipe.recipe.label} className="max-w-xs rounded-lg shadow-md" />
            </div>
            <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Ingredients:</h3>
                <ul className="list-disc list-inside mb-6">
                    {recipe.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index} className="mb-2">{ingredient}</li>
                    ))}
                </ul>
                <h3 className="text-2xl font-semibold mb-4">Instructions:</h3>
                <p className="leading-relaxed mb-6">
                    For detailed instructions on how to make this dish, please visit the 
                    <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> original recipe source</a>.
                </p>
            </div>
        </div>
    );
}

export default RecipeDetail;
