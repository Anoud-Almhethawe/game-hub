import { useEffect } from "react";
import { useState } from "react";
import GenresServices, {
  Genre,
  FetchGenresResponse,
} from "../services/Genres-services";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const { request, cancle } = GenresServices.getAll<FetchGenresResponse>();
    request
      .then(res => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) setError(err.message);
      });
    return () => {
      cancle();
    };
  }, []);

  return { genres, error, isloading, setGenres, setError };
};

export default useGenres;
