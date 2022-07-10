import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Button,
  ModalFooter,
} from '@chakra-ui/react';

function DialogDelete({
  isOpen,
  onClose,
  selectedMember,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedMember: any;
}): JSX.Element {
  const onConfirmRemove = (): void => {
    onClose();
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove member</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={6} py={7}>
          Are you sure you want to remove this <b>{selectedMember?.name}</b>?
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={onConfirmRemove} colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default DialogDelete;
