import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalFooter,
    useDisclosure,
    FormControl,
    Input,
    FormLabel,
    Switch,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function DialogAdd(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                onClick={onOpen}
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="outline"
                textAlign="right"
            >
                Tambah Anggota
            </Button>
            <Modal
                closeOnOverlayClick={false}
                size="xl"
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Tambah Data</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel htmlFor="nama">Nama Anggota</FormLabel>
                            <Input id="nama" placeholder="Nama Anggota" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="alamat">Alamat</FormLabel>
                            <Input id="alamat" placeholder="Alamat" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="phone">Telepon</FormLabel>
                            <Input id="phone" placeholder="Telepon" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="status">Status Aktif ?</FormLabel>
                            <Switch id="status" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" onClick={onClose}>
                            Simpan
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default DialogAdd;
