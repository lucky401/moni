import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Icon,
  Circle,
  LinkBox,
  LinkOverlay,
  Heading
} from '@chakra-ui/react';
import { FiMap } from 'react-icons/fi';
import { RiDashboardLine, RiGroupLine, RiBankLine } from 'react-icons/ri';

const dataMenu = [
  {
    id: "1",
    title: "Peta",
    description: "This is a summary, can be any description",
    icon: FiMap,
    href: "/maps"
  },
  {
    id: "2",
    title: "Dashboard",
    description: "This is a summary, can be any description",
    icon: RiDashboardLine,
    href: "/dashboard"
  },
  {
    id: "3",
    title: "Anggota",
    description: "This is a summary, can be any description",
    icon: RiGroupLine,
    href: "/anggota"
  },
  {
    id: "4",
    title: "Bank Sampah",
    description: "This is a summary, can be any description",
    icon: RiBankLine,
    href: "/bank-sampah"
  },
];

function Menu(): JSX.Element {
  return (
    <Container
      minW="60%"
      minH="100vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid templateColumns="repeat(2, 2fr)" gap={6} w="100%">
        {dataMenu.map((item) => {
          return (
            <GridItem key={item.id}>
              <LinkBox>
                <Box
                  p={4}
                  display={{ md: 'flex' }}
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="md"
                  _hover={{
                    borderColor: 'gray.300',
                    cursor: 'pointer',
                    backgroundColor: 'gray.100',
                  }}>
                  <Box flexShrink={0} my="auto">
                    <Circle size='5em' bg='teal.600' color='white'>
                      <Icon boxSize="2em" as={item.icon} display="block" />
                    </Circle>
                  </Box>
                  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Heading
                      fontWeight='bold'
                      textTransform='uppercase'
                      fontSize='md'
                      letterSpacing='wide'
                      color='teal.600'
                    >
                      <LinkOverlay href={item.href}>
                        {item.title}
                      </LinkOverlay>
                    </Heading >
                    <Text mt={2} color='gray.500'>
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              </LinkBox>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
  );
}

export default Menu;
