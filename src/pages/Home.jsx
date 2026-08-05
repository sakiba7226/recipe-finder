import React from 'react'

import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import { searchRecipes } from "../services/api";

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
                    Find Delicious Recipes 🍽️
                </h1>

                <p className="text-gray-500 mt-2">
                    Search recipes by ingredient.
                </p>

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                />


                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Search Results
                    </h2>

                    {recipes.length === 0 ? (
                        <p className="text-gray-500">
                            No recipes found.
                        </p>
                    ) : (
                        recipes.map((recipe) => (
                            <div
                                key={recipe.idMeal}
                                className="border p-4 rounded-lg mb-3"
                            >
                                {recipe.strMeal}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;