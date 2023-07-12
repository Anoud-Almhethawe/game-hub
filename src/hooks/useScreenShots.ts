import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshoots from "../entities/Screenshoots";

const usScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshoots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default usScreenshots;
