import Score from "./Score";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
import { HelpModal } from "./HelpModal";
import { Flex } from "@chakra-ui/react";

function Header({ score, highScore }) {
  return (
    <>
      {/* <header className="flex w-full cursor-default justify-between bg-blue-500 px-4 py-4 text-center text-2xl font-bold text-white shadow-md  md:text-3xl lg:text-4xl">
      </header> */}

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
          Highscore: {highScore.current}
        </Score>
      </Flex>
      <HelpModal />
    </>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.object.isRequired,
};

export default Header;
