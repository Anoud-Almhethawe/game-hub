import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genresData from "../Data/GenresData";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hours
    initialData: genresData,
  });

export default useGenres;
