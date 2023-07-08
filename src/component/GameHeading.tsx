import { Heading } from "@chakra-ui/react";

import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);
  const headingText = ` ${platform?.name || ""} ${genre?.name || ""}  Games `;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
