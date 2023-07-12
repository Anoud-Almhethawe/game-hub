import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
          ref.current.value = "";
        }
      }}
    >
      <InputGroup size="lg">
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
