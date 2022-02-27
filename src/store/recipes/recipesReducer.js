const initialState = {
  recipes: [],
  recipe: {},
  status: "idle",
  error: null,
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "recipes/searchRecipes/pending":
    case "recipes/getRecipeInfo/pending":
      return { ...state, status: "loading", error: null };

    case "recipes/searchRecipes/succeeded":
      return {
        ...state,
        status: "succeeded",
        recipes: action.payload,
        error: null,
      };

    case "recipes/getRecipeInfo/succeeded":
      return {
        ...state,
        status: "succeeded",
        recipe: action.payload,
        error: null,
      };

    case "recipes/searchRecipes/rejected":
    case "recipes/getRecipeInfo/rejected":
      return { ...state, status: "failed", error: action.payload };

    case "recipes/removeError":
      return { ...state, error: null };

    default:
      return state;
  }
};
