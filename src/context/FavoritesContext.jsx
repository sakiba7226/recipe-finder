import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (recipe) => {
        const exists = favorites.some(
            (item) => item.idMeal === recipe.idMeal
        );

        if (!exists) {
            setFavorites([...favorites, recipe]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(
            favorites.filter((item) => item.idMeal !== id)
        );
    };

    const isFavorite = (id) => {
        return favorites.some(
            (item) => item.idMeal === id
        );
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);