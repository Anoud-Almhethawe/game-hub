import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import APIClient from "../services/api-client";

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
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.selectedSort,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGame;
