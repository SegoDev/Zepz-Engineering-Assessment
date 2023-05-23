import { FunctionComponent, useEffect, useContext, useState } from "react";
import { getUsers } from "../services/users.service";
import { Flex, Spinner } from "@chakra-ui/react";
import { UserDataContext } from "../context/UsersContextProvider";
import UserList from "../components/UserList/UserList";
import Error from "../components/Error/Error";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import { User } from "../lib/types";

const Home: FunctionComponent = () => {
  const { users, updateUsers } = useContext(UserDataContext);

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // side effects
  useEffect(() => {
    let mounted = true;
    // updateUsers(mockedUsers);
    setIsLoading(true);
    getUsers()
      .then((res) => {
        if (mounted) {
          updateUsers(res);
          setIsLoading(false);
          setError({
            title: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        setError({
          title: err.name,
          message: err.message,
        });
        setIsLoading(false);
      });
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update filtered users when the users or searchValue change
    // if we want to search the entire object
    // <------------->
    // const filteredList = paginatedUsers.filter((user) => {
    // const userValues = Object.values(paginatedUsers).join(" ").toLowerCase();
    // return userValues.includes(searchTerm.toLowerCase());
    // <------------->
    // search only checks display_name
    const filteredList = users.filter((user) =>
      user.display_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filteredList);
    setPageNumber(1); // Reset page number when applying search/filter
  }, [users, searchValue]);

  // Pagination calculations
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Handlers
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleItemsPerPageChange = (selectedItemsPerPage: number) => {
    setItemsPerPage(selectedItemsPerPage);
    setPageNumber(1);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <>
      {isLoading && error.title === "" ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      ) : error.title !== "" ? (
        <Error title={error.title} message={error.message} />
      ) : (
        <>
          <Flex
            width={"100vw"}
            maxHeight={"75vh"}
            overflowY={"auto"}
            height={"100%"}
            mx={"auto"}
            justifyItems={"center"}
            alignItems={"center"}
            px={{ md: 24, lg: 36 }}
            flexDir={"column"}
          >
            <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
            <UserList
              users={searchValue.length > 0 ? filteredUsers : paginatedUsers}
            />
          </Flex>
          <Pagination
            handleNext={handleNext}
            handlePrev={handlePrev}
            pageNumber={pageNumber}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
}
 
export default Home;