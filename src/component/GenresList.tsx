import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
}

const GenresList = ({ onSelectedGenre }: Props) => {
  const { data, errors, isloading } = useData<Genre>("/genres");

  if (isloading) return <Spinner />;

  return (
    <>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
