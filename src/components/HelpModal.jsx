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
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

export function HelpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <QuestionIcon
        boxSize={50}
        onClick={onOpen}
        color={"red.500"}
        className="fa-regular fa-circle-question cursor-pointer pl-4 pt-4 hover:text-gray-300"
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
