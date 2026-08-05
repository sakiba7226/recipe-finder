import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (ingredient) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/filter.php?i=${ingredient}`
        );

        return response.data.meals;
    } catch (error) {
        console.error(error);
        return [];
    }
};