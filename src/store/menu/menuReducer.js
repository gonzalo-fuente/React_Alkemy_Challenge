const initialState = {
  menu: [],
  error: null,
};

export const menuReducer = (state = initialState, action) => {
  const { menu } = state;
  const menuItem = action.payload;
  const veganItems = menu.filter((item) => item.vegan).length;
  const regularItems = menu.filter((item) => !item.vegan).length;

  switch (action.type) {
    case "menu/addtoMenu":
      if (menu.length >= 4) {
        return {
          ...state,
          error: "You already have 4 menu items in your menu",
        };
      }
      if (veganItems >= 2 && menuItem.vegan) {
        return {
          ...state,
          error: "You already have 2 vegan menu items in your menu",
        };
      }
      if (regularItems >= 2 && !menuItem.vegan) {
        return {
          ...state,
          error: "You already have 2 regular menu items in your menu",
        };
      }
      return {
        ...state,
        menu: [...menu, menuItem],
      };

    case "menu/deleteFromMenu":
      const id = action.payload;
      return {
        ...state,
        menu: menu.filter((menuItem) => menuItem.id !== id),
      };

    case "menu/removeError":
      return { ...state, error: null };

    default:
      return state;
  }
};
