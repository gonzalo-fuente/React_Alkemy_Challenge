import MenuForm from "../components/menu/MenuForm";
import Loading from "../components/common/Loading";
import ShowMenu from "../components/menu/ShowMenu";
import { useEffect } from "react";

/* Redux */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeRecipesError,
  searchRecipes,
} from "../store/recipes/recipesAction";
import { removeMenuError } from "../store/menu/menuAction";

/* Sweet Alert */
import swal from "sweetalert";

const MenuItemSearch = () => {
  const menuItems = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);
  const menuItemError = useSelector((state) => state.recipes.error);
  const menuError = useSelector((state) => state.menu.error);

  const dispatch = useDispatch();
  const handleSubmit = (values) => dispatch(searchRecipes(values.text));

  /* Error Handling */
  useEffect(() => {
    if (menuError) {
      swal({
        title: "Oops...",
        text: menuError,
        icon: "error",
        button: "Close",
      }).finally(() => dispatch(removeMenuError()));
    }
  }, [menuError]);

  /* Error Handling */
  useEffect(() => {
    if (menuItemError) {
      swal({
        title: "Oops...",
        text: menuItemError,
        icon: "error",
        button: "Close",
      }).finally(() => dispatch(removeRecipesError()));
    }
  }, [menuItemError]);

  return (
    <div className="mt-4">
      <div className="row mb-5 justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <MenuForm handleSubmit={handleSubmit} />
        </div>
      </div>
      {status === "loading" ? (
        <Loading />
      ) : (
        menuItems.length !== 0 &&
        (menuItems.totalResults !== 0 ? (
          <ShowMenu menu={menuItems.results} />
        ) : (
          <h3>No recipes found</h3>
        ))
      )}
    </div>
  );
};

export default MenuItemSearch;
