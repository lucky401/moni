import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Tag,
    HStack,
    Button,
    Input,
    Stack,
    IconButton,
    InputGroup,
    InputLeftElement,
    Container,
    Box,
    Flex,
    Spacer,
} from '@chakra-ui/react';

import {
    EditIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import ButtonAddData from '../components/dialog-add';
import ButtonDelete from '../../../common/components/dialog-delete';

const dataBankSampah = [
    {
        id: "1",
        nama: "Melania",
        alamat: "Jl. Mangga Dua ",
        kecamatan: "Mangga Dua Selatan",
        kelurahan: "Sawah Besar",
        status: 0
    },
    {
        id: "2",
        nama: "Melania",
        alamat: "Jl. Mangga Dua ",
        kecamatan: "Mangga Dua Selatan",
        kelurahan: "Sawah Besar",
        status: 1
    },

];

function BankSampah(): JSX.Element {
    return (
        <Container maxW="auto" centerContent>
            <Box padding="4" color="black" w="100%" px="50">
                <Heading size="lg" fontSize="36px" textAlign="center" my={100}>
                    DAFTAR BANK SAMPAH
                </Heading>
                <Flex>
                    <Box>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.300" />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Cari nama anggota..." />
                        </InputGroup>
                    </Box>
                    <Spacer />
                    <Box>
                        <ButtonAddData />
                    </Box>
                </Flex>
                <TableContainer marginBottom={12}>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Nama Bank Sampah</Th>
                                <Th>Alamat</Th>
                                <Th>Kecamatan</Th>
                                <Th>Kelurahan</Th>
                                <Th>Status</Th>
                                <Th>Aksi</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataBankSampah.map((item) => (
                                <Tr>
                                    <Td>{item.nama}</Td>
                                    <Td>{item.alamat}</Td>
                                    <Td>{item.kecamatan}</Td>
                                    <Td>{item.kelurahan}</Td>
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
                                            <EditIcon />
                                            <ButtonDelete />
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                    justifyContent="center"
                >
                    <IconButton aria-label="#" icon={<ChevronLeftIcon />} isDisabled />
                    <Button colorScheme="teal" variant="solid">
                        1
                    </Button>
                    <Button colorScheme="gray" variant="solid">
                        2
                    </Button>
                    <IconButton aria-label="#" icon={<ChevronRightIcon />} />
                </Stack>
            </Box>
        </Container>
    );
}

export default BankSampah;
