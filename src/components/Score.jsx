import PropTypes from "prop-types";

function Score({ children, position, color }) {
  const scorePosition = position === "right" ? "right-4" : "left-4";
  return (
    <div
      className={`fixed ${scorePosition} top-4 rounded-lg bg-blue-100 p-2 text-xl font-semibold ${color} shadow-md`}
    >
      {children}
    </div>
  );
}

Score.propTypes = {
  children: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Score;
