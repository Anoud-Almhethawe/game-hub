import "./App.css";

import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem bg="orange.300" area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="pink.300" area="aside">
            aside
          </GridItem>
        </Show>
        <GridItem bg="green.300" area="main">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
