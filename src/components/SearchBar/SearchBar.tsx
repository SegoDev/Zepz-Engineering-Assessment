import { ChangeEvent } from 'react';
import { InputGroup, Input } from '@chakra-ui/react';

interface SearchProps {
  searchValue: string;
  handleSearch: (key: string) => void;
}

const SearchBar = ({ searchValue, handleSearch }: SearchProps) => {

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <InputGroup 
      size={{ base: "sm", md: "lg" }} 
      w={{ base: "80%", md: "sm" }} 
      mt="1.5rem"
    >
      <Input
        id="search-input"
        value={searchValue}
        onChange={onInputChange}
        placeholder="Search users by name..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchBar;