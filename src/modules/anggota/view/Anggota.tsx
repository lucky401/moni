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
import ButtonDelete from '../../../common/components/dialog-delete';
import ButtonUpdate from '../components/dialog-update';
import AddData from '../components/dialog-add';
import dataAnggota from '../../../lib/storage/data-anggota.json';

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
                        <AddData />
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
                                <Tr key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.nama}</Td>
                                    <Td>{item.lokasi.alamat}</Td>
                                    <Td>{item.phone}</Td>
                                    <Td>
                                        <HStack spacing={4}>
                                            {
                                                item.isActive ?
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
                                            <ButtonUpdate
                                                nama={item.nama}
                                                alamat={item.lokasi.alamat}
                                                phone={item.phone}
                                                isActive={item.isActive}
                                            />
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