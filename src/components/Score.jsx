import PropTypes from "prop-types";

function Score({ children, twClasses }) {
  return (
    <div
      className={`rounded-lg bg-blue-100 p-2 text-xl shadow-md ${twClasses}`}
    >
      {children}
    </div>
  );
}

Score.propTypes = {
  children: PropTypes.array.isRequired,
  twClasses: PropTypes.string,
};

export default Score;
