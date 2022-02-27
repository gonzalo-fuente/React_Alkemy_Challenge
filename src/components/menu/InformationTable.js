const InformationTable = ({ menuItem }) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td>Vegan</td>
          <td>
            {menuItem.vegan ? (
              <i className="bi bi-check2-circle text-success lead"></i>
            ) : (
              <i className="bi bi-exclamation-circle text-secondary"></i>
            )}
          </td>
        </tr>
        <tr>
          <td>Vegetarian</td>
          <td>
            {menuItem.vegetarian ? (
              <i className="bi bi-check2-circle text-success lead"></i>
            ) : (
              <i className="bi bi-exclamation-circle text-secondary"></i>
            )}
          </td>
        </tr>
        <tr>
          <td>Gluten Free</td>
          <td>
            {menuItem.glutenFree ? (
              <i className="bi bi-check2-circle text-success lead"></i>
            ) : (
              <i className="bi bi-exclamation-circle text-secondary"></i>
            )}
          </td>
        </tr>
        <tr>
          <td>Healthy</td>
          <td>
            {menuItem.veryHealthy ? (
              <i className="bi bi-check2-circle text-success lead"></i>
            ) : (
              <i className="bi bi-exclamation-circle text-secondary"></i>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InformationTable;
