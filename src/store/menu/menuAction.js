/* Add menu item to menu */
export const addMenuItem = (menuItem) => {
  return {
    type: "menu/addtoMenu",
    payload: menuItem,
  };
};

/* Remove menu item from menu based on ID */
export const deleteMenuItem = (id) => {
  return {
    type: "menu/deleteFromMenu",
    payload: id,
  };
};

/* Remove Error */
export const removeMenuError = () => {
  return {
    type: "menu/removeError",
  };
};
