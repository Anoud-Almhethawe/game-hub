import { HStack, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import MoodSwitch from "./MoodSwitch";

const Navbar = () => {
  return (
    <>
      <HStack spacing="24px" p="20px">
        <Text fontWeight="600" fontSize="50px" style={{ whiteSpace: "nowrap" }}>
          G-Hub
        </Text>
        <SearchBar />
        <MoodSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
