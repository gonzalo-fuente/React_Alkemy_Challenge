import StatsTable from "./StatsTable";

const ShowMenuItemData = ({ menuItem }) => {
  return (
    <div>
      <h3>Menu Item Stats</h3>
      <div className="table-responsive">
        <StatsTable
          price={menuItem.pricePerServing}
          readyInMinutes={menuItem.readyInMinutes}
          healthScore={menuItem.healthScore}
        />
      </div>
    </div>
  );
};

export default ShowMenuItemData;
