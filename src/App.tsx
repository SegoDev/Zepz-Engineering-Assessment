import { ChakraProvider } from '@chakra-ui/react'
import { UserDataProvider } from "./context/UsersContextProvider";
import Home from "./views/Home";
import Header from './components/Header/Header';

function App() {

  return (
    <ChakraProvider>
        <UserDataProvider>
          <Header/>
          <Home/>
        </UserDataProvider>
    </ChakraProvider>
  )
}

export default App
