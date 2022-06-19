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
    Select,
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
                            <FormLabel>Nama Bank Sampah</FormLabel>
                            <Input placeholder="Nama Bank Sampah" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Alamat</FormLabel>
                            <Input placeholder="Alamat" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Kecamatan</FormLabel>
                            <Input placeholder="Kecamatan" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Kelurahan</FormLabel>
                            <Input placeholder="Kelurahan" />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="country">Status</FormLabel>
                            <Select id="country" placeholder="Select status">
                                <option>Aktif</option>
                                <option>Tidak Aktif</option>
                            </Select>
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
