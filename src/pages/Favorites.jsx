import React from 'react'

import Navbar from "../components/Navbar";

const Favorites = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-4xl font-bold">
          Favorite Recipes
        </h1>
      </div>
    </>
  );
};

export default Favorites;