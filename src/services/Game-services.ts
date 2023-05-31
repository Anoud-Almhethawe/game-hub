import create from "./http-services";

export interface Game {
  id: number;
  name: string;
  results: [];
}
export default create("/games?key=4917767e6fa94b3ab16ced4b2865a10f");
