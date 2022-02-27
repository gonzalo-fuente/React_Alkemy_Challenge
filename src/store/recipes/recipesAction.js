/* Axios */
import axios from "axios";

/* Constants */
const URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/* Search all recipes */
export const searchRecipes = (queryData) => async (dispatch) => {
  dispatch({ type: "recipes/searchRecipes/pending" });

  try {
    const response = await axios.get(
      `${URL}/complexSearch?apiKey=${API_KEY}&query=${queryData}&addRecipeInformation=true&number=12
      `,
      { timeout: 10000 }
    );
    return dispatch({
      type: "recipes/searchRecipes/succeeded",
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      // Page not found Error
      if (error.response.status === 404) {
        return dispatch({
          type: "recipes/searchRecipes/rejected",
          payload: "Page Not Found",
        });
        // Unauthorized Error
      } else if (error.response.status === 401) {
        return dispatch({
          type: "recipes/searchRecipes/rejected",
          payload: error.response.data.message,
        });
        // Other 400 Errors
      } else {
        return dispatch({
          type: "recipes/searchRecipes/rejected",
          payload: error.response.data.message,
        });
      }
    } else if (error.request) {
      // Request was made but no response
      return dispatch({
        type: "recipes/searchRecipes/rejected",
        payload: error.message,
      });
    }
    // Other Errors
    return dispatch({
      type: "recipes/searchRecipes/rejected",
      payload: error.message,
    });
  }
};

/* Get sinle recipe information based on ID */
export const getRecipeInfo = (id) => async (dispatch) => {
  dispatch({ type: "recipes/getRecipeInfo/pending" });

  try {
    const response = await axios.get(
      `${URL}/${id}/information?apiKey=${API_KEY}`,
      { timeout: 10000 }
    );
    return dispatch({
      type: "recipes/getRecipeInfo/succeeded",
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      // Page not found Error
      if (error.response.status === 404) {
        return dispatch({
          type: "recipes/getRecipeInfo/rejected",
          payload: "Page Not Found",
        });
        // Unauthorized Error
      } else if (error.response.status === 401) {
        return dispatch({
          type: "recipes/getRecipeInfo/rejected",
          payload: error.response.data.message,
        });
        // Other 400 Errors
      } else {
        return dispatch({
          type: "recipes/getRecipeInfo/rejected",
          payload: error.response.data.message,
        });
      }
    } else if (error.request) {
      // Request was made but no response
      return dispatch({
        type: "recipes/getRecipeInfo/rejected",
        payload: error.message,
      });
    }
    // Other Errors
    return dispatch({
      type: "recipes/getRecipeInfo/rejected",
      payload: error.message,
    });
  }
};

/* Remove Error */
export const removeRecipesError = () => {
  return {
    type: "recipes/removeError",
  };
};
