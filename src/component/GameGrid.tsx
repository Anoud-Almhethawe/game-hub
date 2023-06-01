import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, isloading, setGames, setError } = useGames();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isloading && (
        <div className="text-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={5}
        spacing={10}
      >
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
