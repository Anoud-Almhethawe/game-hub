import { Platform } from "../hooks/useGames";
import { Genre } from "./Genre";
import { publishers } from "./puplisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  parent_platforms: Platform[];
  description_raw: string;
  genres: Genre[];
  publishers: publishers[];
}
