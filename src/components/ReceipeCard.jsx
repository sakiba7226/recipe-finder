import React from 'react'

import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
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
                    <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition">
                        <Heart size={20} />
                        Favorite
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