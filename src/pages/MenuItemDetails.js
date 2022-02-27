import ShowMenuItemData from "../components/menu/ShowMenuItemData";
import Loading from "../components/common/Loading";
import { useEffect } from "react";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipeInfo,
  removeRecipesError,
} from "../store/recipes/recipesAction";

/* Router */
import { useNavigate, useParams } from "react-router-dom";

/* Sweet Alert */
import swal from "sweetalert";

/* HTML Parser */
import parse from "html-react-parser";

const MenuItemDetails = () => {
  const menuItem = useSelector((state) => state.recipes.recipe);
  const status = useSelector((state) => state.recipes.status);
  const menuItemError = useSelector((state) => state.recipes.error);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Get recipe info from API */
  useEffect(() => {
    dispatch(getRecipeInfo(id));
  }, []);

  /* Error Handling */
  useEffect(() => {
    if (menuItemError) {
      swal({
        title: "Oops...",
        text: menuItemError,
        icon: "error",
        button: "Close",
      }).finally(() => {
        dispatch(removeRecipesError());
        navigate(-1);
      });
    }
  }, [menuItemError]);

  return (
    <div className="mt-4">
      {status === "loading" ? (
        <Loading />
      ) : (
        Object.keys(menuItem).length !== 0 && (
          <>
            <h2 className="fs-1 fst-italic mb-3">{menuItem.title}</h2>
            <img
              src={menuItem.image}
              className="img-fluid w-50 rounded mx-auto d-block shadow mb-3 bg-body"
              alt={menuItem.title}
            />

            <h3>Summary</h3>
            <p>{parse(menuItem.summary)}</p>
            <div className="row align-items-center gap-3">
              <div className="col-md">
                <h3>Ingredients</h3>
                <ol className="list-group list-group-numbered list-group-flush">
                  {menuItem.extendedIngredients.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="list-group-item bg-transparent"
                    >
                      {ingredient.name}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="col-md">
                <ShowMenuItemData menuItem={menuItem} />
                <div className="d-grid mb-3">
                  <button className="btn btn-info" onClick={() => navigate(-1)}>
                    <i class="bi bi-arrow-left-circle me-2"></i>
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default MenuItemDetails;
