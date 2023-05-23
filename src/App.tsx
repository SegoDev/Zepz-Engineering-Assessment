import { ChakraProvider } from '@chakra-ui/react'
import { UserDataProvider } from "./context/UsersContextProvider";
import Home from "./views/Home";
import Nav from './components/Header/Header';

function App() {

  return (
    <ChakraProvider>
        <UserDataProvider>
          <Nav/>
          <Home/>
        </UserDataProvider>
    </ChakraProvider>
  )
}

export default App
