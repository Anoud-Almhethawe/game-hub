import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genresData from "../Data/GenresData";
import ms from "ms";
const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hours
    initialData: genresData,
  });

export default useGenres;
