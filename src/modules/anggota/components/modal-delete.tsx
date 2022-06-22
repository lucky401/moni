import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalFooter,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


function ModalDelete(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme="transparent"
            >
                <DeleteIcon color="red.500" />
            </Button>
            <Modal
                closeOnOverlayClick={false}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Hapus Data</ModalHeader>
                    <ModalBody>
                        <Text my='1rem'>
                            Anda yakin akan hapus data ini?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={3}>
                            Hapus
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalDelete;
