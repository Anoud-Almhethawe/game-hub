import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGame, { Game } from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import { Platforms } from "../hooks/usePlatforms";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platforms | null;
}

const skeletons = [1, 2, 3, 4, 5, 6];
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, errors, isloading } = useGame(selectedGenre, selectedPlatform);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={5}
        spacing={3}
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
    </>
  );
};

export default GameGrid;
