import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4917767e6fa94b3ab16ced4b2865a10f",
  },
});
export { CanceledError };
