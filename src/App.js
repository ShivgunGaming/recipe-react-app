import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const searchRecipes = async (query) => {
        const APP_ID = 'dd4ddb88'; // Replace with your Edamam app ID
        const APP_KEY = '816788478ff0b00ce5efc87d06cf2c4f'; // Replace with your Edamam app key
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const selectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    }

    const closeDetail = () => {
        setSelectedRecipe(null);
    }

    return (
        <div className="App">
            <Navbar />
            <Header />
            <div className="flex-grow">
                {selectedRecipe ? (
                    <RecipeDetail recipe={selectedRecipe} closeDetail={closeDetail} />
                ) : (
                    <>
                        <SearchBar searchRecipes={searchRecipes} />
                        <RecipeList recipes={recipes} selectRecipe={selectRecipe} />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
