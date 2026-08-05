import React from 'react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getRecipeDetails } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetails(id);

      setRecipe(data);
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 className="text-center mt-20 text-2xl">
          Loading...
        </h2>
      </>
    );
  }

  if (!recipe) {
    return (
      <>
        <Navbar />
        <h2 className="text-center mt-20 text-2xl">
          Recipe Not Found
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-10">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-500 mb-6"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full md:w-2/3 rounded-xl shadow-lg"
        />

        <h1 className="text-4xl font-bold mt-6">
          {recipe.strMeal}
        </h1>

        <div className="flex gap-4 mt-3">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            {recipe.strCategory}
          </span>

          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {recipe.strArea}
          </span>
        </div>

        <h2 className="text-2xl font-semibold mt-8">
          Instructions
        </h2>

        <p className="text-gray-700 leading-8 mt-3 whitespace-pre-line">
          {recipe.strInstructions}
        </p>
      </div>
    </>
  );
};

export default RecipeDetails;