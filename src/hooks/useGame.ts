import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import APIClient, { FetchResponse } from "../services/api-client";

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

const apiClient = new APIClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.selectedSort,
          search: gameQuery?.searchText,
        },
      }),
  });

export default useGame;
