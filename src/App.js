import './App.css';
import AllRoutes from './Routes/AllRoutes';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <AllRoutes/>
    </ChakraProvider>
  );
}

export default App;
