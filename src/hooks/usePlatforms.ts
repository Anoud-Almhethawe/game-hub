import { useQuery } from "@tanstack/react-query";

import apiClient, { FetchResponse } from "../services/api-client";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
