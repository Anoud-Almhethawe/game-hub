import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup size="md">
        <Input
          ref={ref}
          variant="filled"
          borderRadius="20px"
          placeholder="Search games..."
        />
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
