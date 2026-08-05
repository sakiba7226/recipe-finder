import React from 'react'

import Navbar from "../components/Navbar";
import { useFavorite } from '../context/FavoritesContext';
import RecipeCard from '../components/ReceipeCard';


const Favorites = () => {
  const { favorites } = useFavorite();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-8">
          Favorite Recipes
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">
            No favorite recipes yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;