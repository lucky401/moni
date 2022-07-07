import { Box } from '@chakra-ui/react';

import {AppBar} from './app-bar';

const appShell = {
  appBarPosition: 'fixed',
  appBarHeight: '64px',
};

function App({
  children,
  ...props
}: {
  children: JSX.Element;
  [key: string]: any;
  }): JSX.Element {
  
  return (
    <Box id="app" {...props}>
      <Box>
        <AppBar />
        <Box pt={appShell.appBarHeight}>
          <Box minH="calc(100vh - 64px)" p="48px">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export {App};
