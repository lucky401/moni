import {lazy, Suspense, useEffect, useMemo, useState} from 'react';

import {EditIcon, SearchIcon} from '@chakra-ui/icons';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
  Flex,
  useDisclosure,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';

import {DataTable, DialogFallback, Pagination} from 'common/components';

import {BiTrashAlt} from 'react-icons/bi';
import {MEMBERS} from '../constants';

const DialogForm = lazy(() => import('../components/dialog-form'));
const DialogDelete = lazy(() => import('../components/dialog-delete'));

function Actions({
  rows,
  onOpenDialogFormUpdate,
  onOpenDialogDelete,
}: {
  rows: any;
  onOpenDialogFormUpdate: (member: any) => void;
  onOpenDialogDelete: (member: any) => void;
}): JSX.Element {
  const {
    row: {original},
  } = rows;
  return (
    <HStack gap={1}>
      <Button
        size="xs"
        variant="outline"
        onClick={() => onOpenDialogFormUpdate(original)}
      >
        <EditIcon color="blue.600" />
      </Button>
      <Button
        size="xs"
        variant="outline"
        onClick={() => onOpenDialogDelete(original)}
      >
        <Icon as={BiTrashAlt} color="red.600" />
      </Button>
    </HStack>
  );
}

function Anggota(): JSX.Element {
  const {
    isOpen: isOpenDialogForm,
    onOpen: onOpenDialogForm,
    onClose: onCloseDialogForm,
  } = useDisclosure();

  const {
    isOpen: isOpenDialogDelete,
    onOpen: onOpenDialogDelete,
    onClose: onCloseDialogDelete,
  } = useDisclosure();

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState(MEMBERS);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const {value} = event.target;
    setSearch(value);
  };

  useEffect(() => {
    const filteredMembers = MEMBERS.filter((member: any) =>
      member.name.toLowerCase().includes(search.toLowerCase()),
    );
    setMembers(filteredMembers);
  }, [search]);

  const onOpenDialogFormUpdate = (member: any): void => {
    setSelectedMember(member);
    onOpenDialogForm();
  };

  const onOpenDialogDeleteMember = (member: any): void => {
    setSelectedMember(member);
    onOpenDialogDelete();
  };

  const resetDialog = (): void => {
      setSelectedMember(null);
      onCloseDialogForm()
      onCloseDialogDelete()
  };

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        id: 'no',
        accessor: (row: any, index: number): number => index + 1,
      },
      {
        Header: 'Nama',
        accessor: 'name',
      },
      {
        Header: 'Alamat',
        accessor: 'address',
      },
      {
        Header: 'Telepon',
        accessor: 'phone',
      },
      {
        Header: 'Status',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (rows: any) => {
          const {
            row: {original},
          } = rows;
          return (
            <Box
              background={original.isActive ? 'green.500' : 'red.500'}
              w="100px"
              textAlign="center"
              color="white"
              p="1px"
              borderRadius="md"
            >
              {original.isActive ? 'Aktif' : 'Tidak Aktif'}
            </Box>
          );
        },
      },
      {
        Header: 'Aksi',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (rows: any) => (
          <Actions
            rows={rows}
            onOpenDialogFormUpdate={onOpenDialogFormUpdate}
            onOpenDialogDelete={onOpenDialogDeleteMember}
          />
        ),
      },
    ],
    [],
  );

  return (
    <Box px="50">
      <Suspense fallback={<DialogFallback />}>
        {isOpenDialogForm && (
          <DialogForm
            selectedMember={selectedMember}
            isOpen={isOpenDialogForm}
            onClose={resetDialog}
          />
        )}
        {isOpenDialogDelete && (
          <DialogDelete
            selectedMember={selectedMember}
            isOpen={isOpenDialogDelete}
            onClose={resetDialog}
          />
        )}
      </Suspense>
      <Flex
        direction={{base: 'column', md: 'row'}}
        justify="end"
        align="end"
        my={5}
        gap={2}
      >
        <Text fontSize="lg" fontWeight="bold" lineHeight={6} mr="auto">
          Daftar Anggota
        </Text>
        <Stack
          direction={{base: 'column', md: 'row'}}
          gap="12px"
          w={{base: '100%', md: 'auto'}}
        >
          <Button
            w={{base: '100%', md: '265px'}}
            size="md"
            variant="solid"
            colorScheme="teal"
            color="white"
            type="button"
            onClick={onOpenDialogForm}
          >
            Tambah Anggota
          </Button>
          <InputGroup maxW={{base: '100%', md: '320px'}}>
            <InputLeftElement>
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              onChange={handleSearchChange}
              value={search}
              type="search"
              placeholder="Search"
            />
          </InputGroup>
        </Stack>
      </Flex>
      <DataTable columns={columns} data={members} />
      <Pagination
        currentPage={page}
        pageCount={4}
        totalItems={30}
        perPage={10}
        maxVisible={3}
        gotoPage={p => {
          setPage(p);
        }}
        previousPage={() => {
          setPage(p => p - 1);
        }}
        nextPage={() => {
          setPage(p => p + 1);
        }}
      />
    </Box>
  );
}

export default Anggota;
