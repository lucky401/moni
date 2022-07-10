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
  selectedUnit,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedUnit: any;
}): JSX.Element {
  const onConfirmRemove = (): void => {
    onClose();
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hapus unit</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={6} py={7}>
          Apakah Anda yakin untuk menghapus <b>{selectedUnit?.name}</b>?
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Tutup
          </Button>
          <Button onClick={onConfirmRemove} colorScheme="red">
            Hapus
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default DialogDelete;
