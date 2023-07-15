import PropTypes from "prop-types";

function GameOverModal({ onCardClick, setLose, setScore, lose, win, setWin }) {
  return (
    (win || lose) && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
          &#8203;
          <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Game Over
                  </h3>
                  <div className="mt-2">
                    {win ? (
                      <p className="text-sm text-gray-500">You Win!</p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Better luck next time!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => {
                  setScore(0);
                  onCardClick([]);
                  setLose(false);
                  setWin(false);
                }}
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent
								 bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2
								  focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

GameOverModal.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  setLose: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  lose: PropTypes.bool.isRequired,
  win: PropTypes.bool.isRequired,
  setWin: PropTypes.func.isRequired,
};

export default GameOverModal;
