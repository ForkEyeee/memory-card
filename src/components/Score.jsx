import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
function Score({ children, twClasses }) {
  return (
    <Text
      className={`rounded-lg  p-2 text-xl shadow-md ${twClasses}`}
      color="green.600"
    >
      {children}
    </Text>
  );
}

Score.propTypes = {
  children: PropTypes.array.isRequired,
  twClasses: PropTypes.string,
};

export default Score;
