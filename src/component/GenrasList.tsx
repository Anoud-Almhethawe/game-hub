import { HStack, Image, List, ListItem, Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenrasList = () => {
  const { genres, error, isloading, setGenres, setError } = useGenres();

  return (
    <>
      {isloading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <List>
        {genres.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenrasList;
