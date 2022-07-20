import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <AllRoutes/>
    </ChakraProvider>
  );
}

export default App;
