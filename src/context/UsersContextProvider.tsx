/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";
import type { User } from "../lib/types";

type UserDataContextValue = {
  users: User[];
  updateUsers: (data: User[]) => void;
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

const UserDataContext = createContext<UserDataContextValue>({
    users: [],
    updateUsers: () => {}
});

const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const updateUsers = (data: User[]) => {
      setUsers(data);
    }

    return (
      <UserDataContext.Provider value={{ users, updateUsers }}>
        {children}
      </UserDataContext.Provider>
    )
}

export { UserDataContext, UserDataProvider };