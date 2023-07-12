import Genre from "./Genre";
import Platforms from "./Platforms";
import publishers from "./puplisher";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  parent_platforms: { platform: Platforms }[];
  description_raw: string;
  genres: Genre[];
  publishers: publishers[];
}
