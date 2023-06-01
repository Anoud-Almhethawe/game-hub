import { Game } from "../services/Game-services";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import PlatformIconList from "./PlatformIconList";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
