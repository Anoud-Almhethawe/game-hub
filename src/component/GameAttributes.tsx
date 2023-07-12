import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefintionTerm from "./DefintionTerm";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid as="dl" columns={2}>
        <DefintionTerm term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text margin={0} key={platform.id}>
              {platform.name}
            </Text>
          ))}
        </DefintionTerm>
        <DefintionTerm term="Publishers">
          {game.publishers?.map(publisher => (
            <Text margin={0} key={publisher.id}>
              {publisher.name}
            </Text>
          ))}
        </DefintionTerm>
        <DefintionTerm term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefintionTerm>
        <DefintionTerm term="Genres">
          {game.genres?.map(genre => (
            <Text margin={0} key={genre.id}>
              {genre.name}
            </Text>
          ))}
        </DefintionTerm>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
