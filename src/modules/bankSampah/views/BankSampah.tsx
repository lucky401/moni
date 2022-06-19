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
    Icon,
    Button,
    GridItem,
    Grid,
    Input,
    Stack,
    IconButton,
    InputGroup,
    InputLeftElement,
    Container,
    Box,
  } from '@chakra-ui/react';
  
  import {BiEdit, BiSearch} from 'react-icons/bi';
  import {AiTwotoneDelete} from 'react-icons/ai';
  import {IoIosAdd} from 'react-icons/io';
  import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
  
  function BankSampah(): JSX.Element {
    return (
  
      <Container maxW='auto' centerContent>
      <Box padding='4' color='black' w='100%' px="50">
          <Heading size="lg" fontSize="36px" textAlign="center" my={100}>
              DAFTAR BANK SAMPAH
          </Heading>
          <Grid templateColumns='repeat(5,1fr)' gap={4} pb='18'>
              <GridItem colSpan={2} h='10'>
                  <InputGroup >
                      <InputLeftElement pointerEvents='none'>
                          <BiSearch color='gray.300' />
                      </InputLeftElement>
                      <Input type='tel' placeholder='Cari Bank Sampah ...' />
                  </InputGroup>
              </GridItem>
              <GridItem colStart={6} colEnd={6} h='10'>
                  <Button leftIcon={<IoIosAdd />} colorScheme='teal' variant='outline' textAlign="right">
                      Tambah Anggota
                  </Button>
              </GridItem>
          </Grid>
          <TableContainer marginBottom={12}>
              <Table variant='striped'>
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
                              {['sm'].map((size) => (
                                  <Tag size={size} key={size} variant='solid' colorScheme='teal'>
                                  Aktif
                                  </Tag>
                              ))}
                              </HStack>
                          </Td>
                          <Td>
                              <HStack spacing={4}>
                                  <BiEdit />
                                  <AiTwotoneDelete />
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
                              {['sm'].map((size) => (
                                  <Tag size={size} key={size} variant='solid' colorScheme='gray'>
                                  Tidak Aktif
                                  </Tag>
                              ))}
                              </HStack>
                          </Td>
                          <Td>
                              <HStack spacing={4}>
                                  <BiEdit />
                                  <AiTwotoneDelete color="red.500"/>
                              </HStack>
                          </Td>
                      </Tr>
                  </Tbody>
              </Table>
          </TableContainer>
          <Stack direction='row' spacing={4} align="center" justifyContent='center'>
              <IconButton aria-label='#' icon={<FiChevronLeft />} isDisabled />
              <Button colorScheme='teal' variant='solid'>
                  1
              </Button>
              <Button colorScheme='gray' variant='solid'>
                  2
              </Button>
              <IconButton aria-label='#' icon={<FiChevronRight />} />
          </Stack>
      </Box>
  </Container>
  
    );
  }
  
  export default BankSampah;
  
  