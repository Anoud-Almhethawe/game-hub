import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex>
        <Box w="100px" p="4" bg="blue.400">
          Box 1
        </Box>
        <Box flex="1" p="4" bg="#000000">
          Box 3
        </Box>
        <Box w="100px" p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
