import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {useTable} from 'react-table';

import TableSkeleton from './table-skeleton';

function DataTable({
  columns,
  data,
  isLoaded = false,
  ...props
}: {
  columns: any;
  data: any;
  isLoaded?: boolean;
  [key: string]: any;
}): JSX.Element {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <Box {...props}>
      {isLoaded && <TableSkeleton />}
      {!isLoaded && (
        <TableContainer>
          <Table variant="simple" {...getTableProps()}>
            <Thead>
              {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <Th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default DataTable;
