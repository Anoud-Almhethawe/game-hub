import { Box, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./component/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./component/SortSelector";
import "./App.css";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  selectedSort: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "270px 1fr",
        }}
      >
        <GridItem area="nav" padding={"10px"}>
          <Navbar
            onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={2}>
            <GenresList
              onSelectedGenre={genre => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box ml={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} mb={5}>
              <PlatformSelector
                onSelectedPlatform={platform =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                selectedSort={gameQuery.selectedSort}
                onSelectedSort={selectedSort =>
                  setGameQuery({ ...gameQuery, selectedSort })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
