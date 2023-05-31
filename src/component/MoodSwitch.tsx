import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const MoodSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <div>
      <HStack spacing="5px">
        <Switch
          colorScheme="teal"
          onChange={toggleColorMode}
          isChecked={isDarkMode}
        />
        <Text style={{ whiteSpace: "nowrap" }}>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default MoodSwitch;
