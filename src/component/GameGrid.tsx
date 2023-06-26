import GameCard from "./GameCard";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGame from "../hooks/useGame";

import { GameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const skeletons = [1, 2, 3, 4, 5, 6];
const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGame(gameQuery);

  // if (errors) <Text>{errors}</Text>;

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loding..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
