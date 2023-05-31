import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import useGames from "./hooks/useGames";

interface Genra {
  id: number;
  name: string;
}

function App() {
  const { games, error, isloading, setGames, setError } = useGames();
  // const [genras, setGenras] = useState<Genra[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("genres?key=4917767e6fa94b3ab16ced4b2865a10f")
  //     .then(res => setGenras(res.data.results))
  //     .catch(err => console.log(err.message));
  // }, []);
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="pink.300" area="aside"></GridItem>
        </Show>
        <GridItem bg="green.300" area="main">
          <ul>
            {/* {error && <p className="text-danger">{error}</p>} */}
            {isloading && (
              <div className="text-center mt-3">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {games.map(game => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
