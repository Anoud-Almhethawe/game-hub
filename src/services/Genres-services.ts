import create from "./http-services";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface FetchGenresResponse {
  count: number;
  results: { genre: Genre }[];
}

export default create("/genres");
