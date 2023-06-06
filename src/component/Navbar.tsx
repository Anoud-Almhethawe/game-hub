import { Box, HStack, Image, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import MoodSwitch from "./MoodSwitch";
import logo from "../assets/logo.webp";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack spacing="24px" p="20px">
        <Image src={logo} alt="logo" boxSize="60px" />

        <SearchBar onSearch={onSearch} />
        <MoodSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
