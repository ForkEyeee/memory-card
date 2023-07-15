import Score from "./Score";
import PropTypes from "prop-types";

function Header({ score, highScore }) {
  return (
    <header className="flex w-full cursor-default justify-around bg-blue-600 px-4 py-4 text-center text-2xl font-bold text-white shadow-md hover:text-gray-300 md:text-3xl lg:text-4xl">
      <Score twClasses={"text-blue-800 bg-gray-200 font-bold"}>
        Score: {score}
      </Score>
      Memory Card Game
      <Score twClasses={"text-green-700 bg-gray-200 font-bold"}>
        Highscore: {highScore.current}
      </Score>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.object.isRequired,
};

export default Header;
