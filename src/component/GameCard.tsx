import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGame";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
