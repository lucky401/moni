import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Icon,
  Circle,
  Heading,
  Link,
} from '@chakra-ui/react';
import { FiMap } from 'react-icons/fi';
import { RiDashboardLine, RiGroupLine, RiBankLine } from 'react-icons/ri';
import { Link as ReactRouterLink } from 'react-router-dom';

const dataMenu = [
  {
    id: '1',
    title: 'Peta',
    description: 'Peta persebaran bank sampah dan petugas kebersihan',
    icon: FiMap,
    href: '/maps',
  },
  {
    id: '2',
    title: 'Dashboard',
    description: 'Visualisasi data terkait pengolahan sampah',
    icon: RiDashboardLine,
    href: '/dashboard',
  },
  {
    id: '3',
    title: 'Anggota Petugas Kebersihan',
    description: 'Data anggota kebersihan yang terdaftar',
    icon: RiGroupLine,
    href: '/anggota',
  },
  {
    id: '4',
    title: 'Bank Sampah',
    description: 'Data bank sampah yang dikelola',
    icon: RiBankLine,
    href: '/bank-sampah',
  },
];

function Menu(): JSX.Element {
  return (
    <Container
      minW="60%"
      minH="calc(100vh - 64px)"
      py="10%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {dataMenu.map(item => {
          return (
            <Box
              key={item.id}
              minW="100%"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              _hover={{
                borderColor: 'gray.300',
                cursor: 'pointer',
                backgroundColor: 'gray.100',
              }}
            >
              <Link
                as={ReactRouterLink}
                to={item.href}
                style={{ textDecoration: 'none' }}
                p={4}
                display={{ md: 'flex' }}
              >
                <Box flexShrink={0} ml={{ base: 4, md: 6 }}>
                  <Circle size="5em" bg="teal.600" color="white">
                    <Icon boxSize="2em" as={item.icon} display="block" />
                  </Circle>
                </Box>
                <Box mt={{ base: 4, md: 2 }} ml={{ base: 4, md: 6 }}>
                  <Heading
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="md"
                    letterSpacing="wide"
                    color="teal.600"
                  >
                    {item.title}
                  </Heading>
                  <Text mt={2} color="gray.500">
                    {item.description}
                  </Text>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Menu;
