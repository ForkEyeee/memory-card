import PropTypes from "prop-types";

function Drink({ drinkPhotoName, drinkName }) {
  return (
    <li>
      <img src={drinkPhotoName} alt={drinkName} className="w-48 h-48" />
    </li>
  );
}
Drink.propTypes = {
  drinkPhotoName: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
};
export default Drink;
