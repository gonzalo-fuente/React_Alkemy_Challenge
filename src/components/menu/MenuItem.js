import InformationTable from "./InformationTable";
import { useEffect, useState } from "react";
import { addMenuItem, deleteMenuItem } from "../../store/menu/menuAction";

/* Redux */
import { useDispatch, useSelector } from "react-redux";

/* Router */
import { Link } from "react-router-dom";

const MenuItem = ({ menuItem }) => {
  const menu = useSelector((state) => state.menu.menu);
  const [isInMenu, setIsInMenu] = useState(false);

  /* Check if the menu item is in the menu */
  useEffect(() => {
    setIsInMenu(menu.some((item) => item.id === menuItem.id));
  }, [menu, menuItem]);

  const dispatch = useDispatch();

  return (
    <div
      className="card shadow bg-transparent rounded"
      style={{ width: "18rem" }}
    >
      <img
        src={menuItem.image}
        className="card-img-top rounded mt-3"
        alt={menuItem.title}
      />
      <div className="card-body">
        <h5 className="card-title">{menuItem.title}</h5>
        <div className="card-text table-responsive">
          <InformationTable menuItem={menuItem} />
        </div>
        <div className="d-grid gap-3">
          <Link to={`/menu-items/${menuItem.id}`} className="btn btn-dark">
            More Details
          </Link>
          {!isInMenu ? (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addMenuItem(menuItem))}
            >
              Add to Menu
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(deleteMenuItem(menuItem.id))}
            >
              Remove from Menu
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
