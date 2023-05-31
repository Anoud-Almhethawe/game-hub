import { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";
import GameServices, { Game } from "../services/Game-services";

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const { request, cancle } = GameServices.getAll<FetchGamesResponse[]>();
    request
      .then(res => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) setError(err.message);
      });
    return () => {
      cancle();
    };
  }, []);

  return { games, error, isloading, setGames, setError };
};

export default useGames;
