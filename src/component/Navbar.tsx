import { HStack, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import MoodSwitch from "./MoodSwitch";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <>
      <HStack spacing="30px" p="20px" justifyContent="space-between">
        <Image src={logo} alt="logo" boxSize="60px" />
        <SearchBar />
        <MoodSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
