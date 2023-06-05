import useData from "./useData";
import { Genre } from "./useGenre";
import { Platforms } from "./usePlatforms";

export interface Platform {
  platform: any;
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  parent_platforms: Platform[];
}

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platforms | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGame;
