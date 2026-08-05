import React from 'react'

import { useState } from "react";

import { LoaderCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import { searchRecipes } from "../services/api";
import RecipeCard from '../components/ReceipeCard';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        try {
            setLoading(true);
            setError("");

            const data = await searchRecipes(searchTerm);

            setRecipes(data || []);
            setHasSearched(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
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
                    loading={loading}
                />


                <div className="my-10">
                    <h2 className="text-2xl font-bold mb-6">
                        Search Results
                    </h2>


                    {/* Error */}
                    {error && (
                        <div className="mt-6 rounded-lg bg-red-100 border border-red-300 p-4 text-red-700">
                            {error}
                        </div>
                    )}


                    {loading ? (
                        <div className="flex justify-center mt-10">
                            <LoaderCircle
                                className="animate-spin text-orange-500"
                                size={40}
                            />
                        </div>
                    ) : hasSearched && recipes.length === 0 ? (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No Recipes Found
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Try searching for another ingredient.
                            </p>
                        </div>
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