import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../component/GameGrid";
import GameHeading from "../component/GameHeading";
import GenresList from "../component/GenresList";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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
};

export default HomePage;
