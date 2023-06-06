import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
