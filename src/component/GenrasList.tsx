import { VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/Genres-services";

const GenrasList = () => {
  const { genres, error, isloading, setGenres, setError } = useGenres();

  return (
    <>
      {isloading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenrasList;
