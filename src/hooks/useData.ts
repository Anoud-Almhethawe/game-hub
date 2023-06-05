import { useEffect } from "react";
import { useState } from "react";

import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        setErrors(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, errors, isloading };
};

export default useData;
