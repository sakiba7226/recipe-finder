import React from 'react'

import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import { searchRecipes } from "../services/api";
import RecipeCard from '../components/ReceipeCard';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        const data = await searchRecipes(searchTerm);

        setRecipes(data || []);
    };

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-5 mt-10">
                <h1 className="text-4xl font-bold">
                    Find Delicious Recipes
                </h1>

                <p className="text-gray-500 mt-2">
                    Search recipes by ingredient.
                </p>

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                />


                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6">
                        Search Results
                    </h2>

                    {recipes.length === 0 ? (
                        <p className="text-gray-500">
                            No recipes found.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.idMeal}
                                    recipe={recipe}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;