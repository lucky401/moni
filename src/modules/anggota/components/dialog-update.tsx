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
import { EditIcon } from '@chakra-ui/icons';

interface Props {
    nama: string;
    alamat: string;
    phone: string;
    isActive: boolean;
}

function DialogUpdate({ nama, alamat, phone, isActive }: Props): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen} colorScheme="transparent">
                <EditIcon color="grey" />
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
                    <ModalHeader>Update Data</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel htmlFor="nama">Nama Anggota</FormLabel>
                            <Input id="nama" placeholder="Nama Anggota" value={nama} />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="alamat">Alamat</FormLabel>
                            <Input id="alamat" placeholder="Alamat" value={alamat} />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel htmlFor="phone">Telepon</FormLabel>
                            <Input id="phone" placeholder="Telepon" value={phone} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel htmlFor="status">Status Aktif ?</FormLabel>
                            <Switch id="status" defaultChecked={isActive} />
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

export default DialogUpdate;
