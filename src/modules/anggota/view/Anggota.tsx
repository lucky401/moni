import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Box,
    HStack,
    Tag,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Stack,
    IconButton, Flex, Spacer
} from '@chakra-ui/react';
import ButtonAddData from '../components/dialog-add';
import ButtonDelete from '../../../common/components/dialog-delete';
import ButtonUpdate from '../components/dialog-update';

const dataAnggota = [
    {
        id: "1",
        name: "Melania",
        address: "Jl. Mangga 2",
        phoneNumber: "081284302290",
        status: 0
    },
    {
        id: "2",
        name: "Melania",
        address: "Perumahan Bogor Indah No.12",
        phoneNumber: "08121212121",
        status: 1
    },

];


function Anggota(): JSX.Element {
    return (
        <Container maxW='auto' centerContent>
            <Box padding='4' color='black' w='100%' px="50">
                <Heading size="lg" fontSize="36px" textAlign="center" my={100}>
                    DAFTAR ANGGOTA
                </Heading>
                <Flex>
                    <Box >
                        <InputGroup >
                            <InputLeftElement pointerEvents='none'>
                                <SearchIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Cari nama anggota...' />
                        </InputGroup>
                    </Box>
                    <Spacer />
                    <Box >
                        <ButtonAddData />
                    </Box>
                </Flex>
                <TableContainer marginBottom={12}>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                <Th>ID Anggota</Th>
                                <Th>Nama Anggota</Th>
                                <Th>Alamat</Th>
                                <Th>Telepon</Th>
                                <Th>Status</Th>
                                <Th>Aksi</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataAnggota.map((item) => (
                                <Tr>
                                    <Td>{item.id}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>{item.address}</Td>
                                    <Td>{item.phoneNumber}</Td>
                                    <Td>
                                        <HStack spacing={4}>
                                            {
                                                item.status === 1 ?
                                                    <Tag variant='solid' colorScheme='teal'>
                                                        Aktif
                                                    </Tag>

                                                    :
                                                    <Tag variant='solid' colorScheme='gray'>
                                                        Tidak Aktif
                                                    </Tag>
                                            }
                                        </HStack>
                                    </Td>
                                    <Td>
                                        <HStack>
                                            <ButtonUpdate />
                                            <ButtonDelete />
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Stack direction='row' spacing={4}>
                    <IconButton aria-label='#' icon={<ChevronLeftIcon />} isDisabled />
                    <Button colorScheme='teal' variant='solid'>
                        1
                    </Button>
                    <Button colorScheme='gray' variant='solid'>
                        2
                    </Button>
                    <IconButton aria-label='#' icon={<ChevronRightIcon />} />
                </Stack>
            </Box>
        </Container>
    );
}

export default Anggota;