import useData from "./use-data";
import { type Genre } from "./use-genre";
import { type Platform } from "./use-platforms";

export interface Game {
  id: number;
  name: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
  useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id
    }}, [
      selectedGenre?.id, 
      selectedPlatform?.id
    ]);

export default useGames;
