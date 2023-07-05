import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);
  const headingText = ` ${gameQuery.platformId?.name || ""} ${
    genre?.name || ""
  }  Games `;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
