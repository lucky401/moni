import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Icon,
} from '@chakra-ui/react';
import {FiMap} from 'react-icons/fi';
import {RiDashboardLine} from 'react-icons/ri';

function Menu(): JSX.Element {
  return (
    <Container
      minH="100vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid templateColumns="repeat(2, 2fr)" gap={6} w="100%">
        <GridItem>
          <Box
            border="1px solid"
            borderColor="gray.500"
            borderRadius="md"
            p={10}
            _hover={{
              borderColor: 'gray.300',
              cursor: 'pointer',
              backgroundColor: 'gray.100',
            }}
            transition="background-color 0.3s ease"
          >
            <Icon boxSize="2em" as={FiMap} display="block" mx="auto" />
            <Text textAlign="center" my={2}>
              Map
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            border="1px solid"
            borderColor="gray.500"
            borderRadius="md"
            p={10}
            _hover={{
              borderColor: 'gray.200',
              cursor: 'pointer',
              backgroundColor: 'gray.100',
            }}
            transition="background-color 0.3s ease"
          >
            <Icon
              boxSize="2em"
              as={RiDashboardLine}
              display="block"
              mx="auto"
            />
            <Text textAlign="center" my={2}>
              Dashboard
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            border="1px solid"
            borderColor="gray.500"
            borderRadius="md"
            p={10}
            _hover={{
              borderColor: 'gray.200',
              cursor: 'pointer',
              backgroundColor: 'gray.100',
            }}
            transition="background-color 0.3s ease"
          >
            <Icon boxSize="2em" as={FiMap} display="block" mx="auto" />
            <Text textAlign="center" my={2}>
              Anggota
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            border="1px solid"
            borderColor="gray.500"
            borderRadius="md"
            p={10}
            _hover={{
              borderColor: 'gray.200',
              cursor: 'pointer',
              backgroundColor: 'gray.100',
            }}
            transition="background-color 0.3s ease"
          >
            <Icon
              boxSize="2em"
              as={RiDashboardLine}
              display="block"
              mx="auto"
            />
            <Text textAlign="center" my={2}>
              Bank Sampah
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Menu;
