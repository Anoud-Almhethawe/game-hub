import create from "./http-services";
export interface Platform {
  id: string;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export default create("/games");
