import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { Check, Close } from "@mui/icons-material";

export default function ModalConfirmacion({
  isOpen,
  handleConfirmacion,
  onClose,
  pregunta,
  datoAConfirmar,
}) {
  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {pregunta}
        </ModalHeader>
        <ModalBody>
          {datoAConfirmar}
        </ModalBody>
        <ModalFooter justifyContent="space-evenly">
          <IconButton
            onClick={onClose}
            color={"white"}
            bg={"red.300"}
            icon={<Close />}
          />
          <IconButton
            onClick={() => handleConfirmacion()}
            bg={"teal.200"}
            icon={<Check />}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
