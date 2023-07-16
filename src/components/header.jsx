import Score from "./Score";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
import { HelpModal } from "./HelpModal";
import { Flex } from "@chakra-ui/react";

function Header({ score, highScore }) {
  return (
    <>
      <Flex justify="space-between" className="bg-blue-500">
        <Score twClasses={"text-green-600 bg-gray-200 font-bold"}>
          Score: {score}
        </Score>
        <Text
          fontSize={{ base: "md", md: "lg", lg: "3xl" }}
          lineHeight="tall"
          textAlign={{ base: "center", md: "left" }}
          fontWeight={{ base: "normal", md: "bold" }}
          textTransform={{ base: "uppercase", md: "none" }}
          whitespace="normal"
          wordBreak={{ base: "break-word", md: "normal" }}
          color="whiteAlpha.900"
        >
          Memory Card Game
        </Text>
        <Score twClasses={"text-red-600 bg-gray-200 font-bold"}>
          Highscore: {highScore}
        </Score>
      </Flex>
      <HelpModal />
    </>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Header;
