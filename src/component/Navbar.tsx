import { HStack, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import MoodSwitch from "./MoodSwitch";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack padding="10px" justifyContent="space-between">
        <Link to="/">
          <Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
        </Link>
        <SearchBar />
        <MoodSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
