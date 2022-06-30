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

import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import dataBankSampah from '../../../lib/storage/data-bank-sampah.json';
import ButtonDelete from '../../../common/components/dialog-delete';
import ButtonAddData from '../components/dialog-add';
import ButtonUpdate from '../components/dialog-update';

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
                                <Th>ID</Th>
                                <Th>Nama Bank Sampah</Th>
                                <Th>Alamat</Th>
                                <Th>Kelurahan</Th>
                                <Th>Kecamatan</Th>
                                <Th>Status</Th>
                                <Th>Aksi</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataBankSampah.map(item => (
                                <Tr key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.nama}</Td>
                                    <Td>{item.lokasi.alamat}</Td>
                                    <Td>{item.lokasi.kelurahan}</Td>
                                    <Td>{item.lokasi.kecamatan}</Td>
                                    <Td>
                                        <HStack spacing={4}>
                                            {item.isActive ? (
                                                <Tag variant="solid" colorScheme="teal">
                                                    Aktif
                                                </Tag>
                                            ) : (
                                                <Tag variant="solid" colorScheme="gray">
                                                    Tidak Aktif
                                                </Tag>
                                            )}
                                        </HStack>
                                    </Td>
                                    <Td>
                                        <HStack>
                                            <ButtonUpdate
                                                nama={item.nama}
                                                alamat={item.lokasi.alamat}
                                                kelurahan={item.lokasi.kelurahan}
                                                kecamatan={item.lokasi.kecamatan}
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
                <Stack direction="row" spacing={4}>
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
