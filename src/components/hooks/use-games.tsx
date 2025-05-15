import { CanceledError } from "axios";
import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  tba: boolean;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    //return controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
