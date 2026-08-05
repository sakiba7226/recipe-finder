import React from 'react'

import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorite } from '../context/FavoritesContext';



const RecipeCard = ({ recipe }) => {

    const { addFavorite, removeFavorite, isFavorite } =
        useFavorite();

    const favorite = isFavorite(recipe.idMeal);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-bold line-clamp-2">
                    {recipe.strMeal}
                </h2>

                <div className="flex justify-between items-center mt-5">
                    {/* Favorite Button */}
                    <button
                        onClick={() =>
                            favorite
                                ? removeFavorite(recipe.idMeal)
                                : addFavorite(recipe)
                        }
                        className={`flex items-center gap-2 transition ${favorite
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                            }`}
                    >
                        <Heart
                            size={20}
                            fill={favorite ? "currentColor" : "none"}
                        />
                        {favorite ? "Saved" : "Favorite"}
                    </button>

                    {/* Details Button */}
                    <Link
                        to={`/recipe/${recipe.idMeal}`}
                        className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        <Eye size={18} />
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;