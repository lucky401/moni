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
    DeleteIcon,
    EditIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import ButtonAddData from '../components/modal-add-data';

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
                            <Tr>
                                <Td>Ani Sugigi</Td>
                                <Td>Jln. Mengkudu</Td>
                                <Td>Cibinong</Td>
                                <Td>Koneng</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map(size => (
                                            <Tag
                                                size={size}
                                                key={size}
                                                variant="solid"
                                                colorScheme="teal"
                                            >
                                                Aktif
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Td>
                                <Td>
                                    <HStack spacing={4}>
                                        <EditIcon />
                                        <DeleteIcon color="red.500" />
                                    </HStack>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Caca Merica</Td>
                                <Td>Jln. Salak</Td>
                                <Td>Sabang</Td>
                                <Td>Demak</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map(size => (
                                            <Tag
                                                size={size}
                                                key={size}
                                                variant="solid"
                                                colorScheme="gray"
                                            >
                                                Tidak Aktif
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Td>
                                <Td>
                                    <HStack spacing={4}>
                                        <EditIcon />
                                        <DeleteIcon color="red.500" />
                                    </HStack>
                                </Td>
                            </Tr>
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
