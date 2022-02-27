import MenuItem from "./MenuItem";

const ShowMenu = ({ menu }) => {
  return (
    <div className="row gap-4 justify-content-evenly">
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default ShowMenu;
