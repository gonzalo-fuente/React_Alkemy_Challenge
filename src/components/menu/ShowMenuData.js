import StatsTable from "./StatsTable";
import { useEffect, useState } from "react";

const ShowMenuData = ({ menu }) => {
  const [menuPrice, setMenuPrice] = useState(0);
  const [averageReadyInMinutes, setAverageReadyInMinutes] = useState(0);
  const [healthScore, setHealthScore] = useState(0);

  /* Stats Calculation */
  useEffect(() => {
    let tempPrice = 0;
    let tempMinutes = 0;
    let tempScore = 0;

    menu.forEach((item) => {
      tempPrice += item.pricePerServing;
      tempMinutes += item.readyInMinutes;
      tempScore += item.healthScore;
    });

    tempMinutes /= menu.length;
    tempScore /= menu.length;

    setMenuPrice(tempPrice.toFixed(2));
    setAverageReadyInMinutes(tempMinutes.toFixed(2));
    setHealthScore(tempScore.toFixed(2));
  }, [menu]);

  return (
    <div className="mt-4">
      <h3>Menu Stats</h3>
      <div className="table-responsive col-md-8 col-lg-6">
        <StatsTable
          price={menuPrice}
          readyInMinutes={averageReadyInMinutes}
          healthScore={healthScore}
        />
      </div>
    </div>
  );
};

export default ShowMenuData;
