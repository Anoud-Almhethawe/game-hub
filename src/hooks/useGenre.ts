import { useQuery } from "@tanstack/react-query";

import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../Data/GenresData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
