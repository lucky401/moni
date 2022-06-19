import { DeleteIcon, EditIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
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
import ButtonAddData from '../components/modal-add-data';

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
                            <Tr>
                                <Td>#20462</Td>
                                <Td>Melania</Td>
                                <Td>Jl. Mangga 2</Td>
                                <Td>081284302290</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
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
                                <Td>#45191</Td>
                                <Td>Lucky</Td>
                                <Td>Bukit Asri Jl. Melon</Td>
                                <Td>081228110374</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='gray'>
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
                            <Tr>
                                <Td>#18889</Td>
                                <Td>Tazrian</Td>
                                <Td>Bukit Pelangi No.10</Td>
                                <Td>081284302290</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
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
                                <Td>#11182</Td>
                                <Td>Gilly</Td>
                                <Td>Perumahan Bogor Indah No.12</Td>
                                <Td>085399902820</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
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
                                <Td>#16660</Td>
                                <Td>Salwa</Td>
                                <Td>Griya Bukit Jaya No.1</Td>
                                <Td>081222289120</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='gray'>
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
                            <Tr>
                                <Td>#18889</Td>
                                <Td>Tazrian</Td>
                                <Td>Bukit Pelangi No.10</Td>
                                <Td>081284302290</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
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
                                <Td>#11182</Td>
                                <Td>Gilly</Td>
                                <Td>Perumahan Bogor Indah No.12</Td>
                                <Td>085399902820</Td>
                                <Td>
                                    <HStack spacing={4}>
                                        {['sm'].map((size) => (
                                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
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