import GameCard from "./GameCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGame, { Game } from "../hooks/useGame";

import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const skeletons = [1, 2, 3, 4, 5, 6];
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isloading } = useGame(gameQuery);

  if (errors) return <Text>{errors}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={5}
      spacing={6}
    >
      {isloading &&
        skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map(game => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
