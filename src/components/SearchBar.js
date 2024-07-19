import React, { useState } from 'react';

const SearchBar = ({ searchRecipes }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchRecipes(query);
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-6">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for a recipe" 
                className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-80 shadow-md"
            />
            <button type="submit" className="p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-800 shadow-md">Search</button>
        </form>
    );
}

export default SearchBar;
