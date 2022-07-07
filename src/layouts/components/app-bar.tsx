import {StarIcon} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  Circle,
  Avatar,
  Button,
  Icon,
} from '@chakra-ui/react';

import shallow from 'zustand/shallow';
import {useAuth} from 'lib/auth-provider/context';
import {useLogout} from 'lib/auth-provider/context/hooks';
import {RiLogoutBoxRFill} from 'react-icons/ri';

function AppBar({...properties}: {[key: string]: any}): JSX.Element {
  const [user] = useAuth(state => [state.user], shallow);
  const [logout] = useLogout();

  const {name, role} = user;

  return (
    <Box
      as="header"
      height="64px"
      marginTop="0"
      transform="translateY(0px)"
      borderBottom="1px solid #e6e6e6"
      position="fixed"
      top={0}
      right={0}
      zIndex={5}
      py="18px"
      px="40px"
      display="flex"
      alignItems="center"
      backgroundColor="white"
      left="0"
      {...properties}
    >
      <Text
        fontSize="xl"
        lineHeight={5}
        fontWeight="bold"
        textTransform="capitalize"
      >
        MONI
      </Text>
      <Spacer />
      <Flex gap={4} align="center">
        <VStack align="start" spacing="2px" gap={1}>
          <Text
            fontSize="sm"
            lineHeight={5}
            fontWeight="bold"
            textTransform="capitalize"
          >
            {name}
          </Text>
          <HStack>
            <Circle size="16px" bg="yellow.400">
              <StarIcon w="8px" h="8px" color="white" />
            </Circle>
            <Text fontSize="xs" lineHeight={4} textTransform="capitalize">
              {role}
            </Text>
          </HStack>
        </VStack>
        <Avatar
          width="42px"
          height="42px"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
        />
        <Button variant="ghost" onClick={logout}>
          <Icon as={RiLogoutBoxRFill} color="gray.400" w="32px" h="32px" />
        </Button>
      </Flex>
    </Box>
  );
}

export {AppBar};
