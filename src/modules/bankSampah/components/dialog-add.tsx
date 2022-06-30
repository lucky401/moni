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

function ModalTambahData(): JSX.Element {
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
                Tambah Bank Sampah
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
                    <ModalHeader>Tambah Bank Sampah</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel htmlFor="nama">Nama Bank Sampah</FormLabel>
                            <Input id="nama" placeholder="Nama Bank Sampah" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="alamat">Alamat</FormLabel>
                            <Input id="alamat" placeholder="Alamat" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="kelurahan">Kelurahan</FormLabel>
                            <Input id="kelurahan" placeholder="Kelurahan" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="kecamatan">Kecamatan</FormLabel>
                            <Input id="kecamatan" placeholder="Kecamatan" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="status">Status Aktif ?</FormLabel>
                            <Switch id="status" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" onClick={onClose}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalTambahData;
