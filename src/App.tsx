import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes/>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
