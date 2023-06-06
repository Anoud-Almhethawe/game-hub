import genres from "../Data/GenresData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
const useGenre = () => ({ data: genres, errors: null, isloading: false });

export default useGenre;
