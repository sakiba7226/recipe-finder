import React from 'react'

import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto mt-10">
                <h1 className="text-4xl font-bold">
                    Find Delicious Recipes
                </h1>

                <p className="text-gray-500 mt-3">
                    Search recipes by ingredient and save your favorites.
                </p>
            </div>
        </>
    );
};

export default Home;