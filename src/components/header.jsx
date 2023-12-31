import Score from "./Score";
import PropTypes from "prop-types";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function Header({ score, highScore }) {
  const fontSize = useBreakpointValue({ base: "md", md: "lg", lg: "3xl" });
  return (
    <>
      <Box
        as="header"
        bg="blue.500"
        px={[2, 4, 6]}
        py={4}
        shadow="md"
        color="white"
        className="cursor-default shadow-2xl"
      >
        <Flex justify="space-between" align="center">
          <Score twClasses={"text-green-600 bg-gray-200 font-bold"}>
            Score: {score}
          </Score>
          <Heading size="lg" fontSize={fontSize}>
            Memory Card Game
          </Heading>
          <Score twClasses={"text-red-600 bg-gray-200 font-bold"}>
            Highscore: {highScore}
          </Score>
        </Flex>
      </Box>
    </>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Header;
