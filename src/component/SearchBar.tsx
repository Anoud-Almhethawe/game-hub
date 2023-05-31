import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <InputGroup size="md">
      <Input
        variant="filled"
        borderRadius="20px"
        placeholder="Search games..."
      />
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;
