import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import { useState } from "react";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import "./App.css";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" padding={"10px"}>
          <Navbar
            onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={1}>
            <GenresList
              onSelectedGenre={genre =>
                setGameQuery({ ...gameQuery, genreId: genre?.id })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box ml={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} mb={5}>
              <PlatformSelector
                onSelectedPlatform={platform =>
                  setGameQuery({ ...gameQuery, platformId: platform?.id })
                }
                selectedPlatformId={gameQuery.platformId}
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
