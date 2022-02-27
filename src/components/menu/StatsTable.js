const StatsTable = ({ price, readyInMinutes, healthScore }) => {
  return (
    <table className="table table-sm table-striped">
      <tbody>
        <tr>
          <td>Menu Price</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>Average Preparation Time</td>
          <td>{readyInMinutes}</td>
        </tr>
        <tr>
          <td>Health Score</td>
          <td>{healthScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatsTable;
