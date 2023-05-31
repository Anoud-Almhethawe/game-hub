import create from "./http-services";

export interface Game {
  id: number;
  name: string;
}

export default create("/games");
