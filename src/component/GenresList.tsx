import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading } = useGenres();
  const setSelectedGenreId = useGameQueryStore(s => s.setgenreId);
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        debugger;
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontSize="lg"
                variant="link"
                onClick={() => setSelectedGenreId(genre?.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
