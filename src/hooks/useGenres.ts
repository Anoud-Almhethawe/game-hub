import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genresData from "../Data/GenresData";

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
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: genresData,
  });

export default useGenres;
