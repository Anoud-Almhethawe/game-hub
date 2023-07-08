import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import "./App.css";
import GameHeading from "./component/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" padding={"10px"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={1}>
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box ml={5}>
            <GameHeading />
            <HStack spacing={5} mb={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
