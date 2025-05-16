import type { GameQuery } from "../../App";
import useData from "./use-data";
import { type Platform } from "./use-platforms";

export interface Game {
  id: number;
  name: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    }}, [gameQuery]);

export default useGames;
