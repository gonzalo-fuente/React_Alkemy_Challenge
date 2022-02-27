import ShowMenu from "../components/menu/ShowMenu";
import ShowMenuData from "../components/menu/ShowMenuData";

/* Redux */
import { useSelector } from "react-redux";

const Home = () => {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <div className="mt-4">
      <h2 className="fs-1 fst-italic mb-3">Menu</h2>
      {menu.length === 0 ? (
        <div>
          <h3 className="text-secondary mb-1">
            The Menu is Empty
            <br />
            <span className="fst-italic">Add a Menu Item to Enjoy!!!</span>
          </h3>

          <p className="lead">
            Remember that you can only add 4 Items to your menu, two Vegans and
            two Regulars.
          </p>
        </div>
      ) : (
        <>
          <ShowMenu menu={menu} />
          <ShowMenuData menu={menu} />
        </>
      )}
    </div>
  );
};

export default Home;
