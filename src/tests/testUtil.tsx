import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { UserDataContext } from "../context/UsersContextProvider";
import { mockUsers } from "./mockData";

jest.doMock("../context/UsersContextProvider.tsx", () => ({
  default: React.createContext({}),
}));

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <UserDataContext.Provider value={{ users: mockUsers, updateUsers: jest.fn() }}>
      {children}
    </UserDataContext.Provider>
  </ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
