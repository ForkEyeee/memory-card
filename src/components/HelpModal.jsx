import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

export function HelpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as={QuestionIcon}
        boxSize={{ base: "16", sm: "12" }}
        color="red.500"
        onClick={onOpen}
        _hover={{
          color: "red.700",
          transition: "color 0.2s",
        }}
        borderRadius="full"
        bg="white"
        boxShadow="2xl"
        className="cursor-pointer"
        m={{ base: "1", sm: "4" }}
        mr={{ base: "3", sm: "7" }}
        mt={{ base: "3", sm: "7" }}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font-black">Game Instructions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <strong>Memory-Card</strong> is an interactive online game. The
            objective of the game is to <strong>select a unique card</strong>{" "}
            during each round. The game concludes when{" "}
            <strong>a previously selected card is clicked</strong> or when{" "}
            <strong> all the cards have been chosen</strong> (in which case you
            win 😄).
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
