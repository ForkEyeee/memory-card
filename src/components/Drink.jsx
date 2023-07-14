import PropTypes from "prop-types";

function Drink({
  drinkPhotoName,
  drinkName,
  drinkId,
  onClickedPhoto,
  onClickScore,
  currentDrink,
  currentScore,
  onWin,
}) {
  function determineWin() {
    if (currentDrink === drinkId) {
      onWin(true);
    }
    onClickedPhoto(drinkId);
  }
  return (
    <li>
      <img
        src={drinkPhotoName}
        alt={drinkName}
        className="border border-solid border-black p-16"
        onClick={determineWin}
        // loading="lazy"
      />
    </li>
  );
}

Drink.propTypes = {
  drinkPhotoName: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
  currentScore: PropTypes.number.isRequired,
  drinkId: PropTypes.number.isRequired,
  onClickedPhoto: PropTypes.func.isRequired,
  onClickScore: PropTypes.func.isRequired,
  currentDrink: PropTypes.number,
  onWin: PropTypes.func.isRequired,
};

export default Drink;
