import { useEffect, useState } from "react";
import GameServices, { Game } from "../services/Game-services";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const { request, cancle } = GameServices.getAll<Game[]>();
    request
      .then(res => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch(err => setError(err.message));
    return () => {
      cancle();
    };
  }, [games]);

  return { games, error, isloading, setGames, setError };
};

export default useGames;
