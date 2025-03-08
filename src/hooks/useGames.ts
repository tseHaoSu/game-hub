import { GameQuery } from "@/App";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // Include gameQuery in the key to refetch when it changes
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
  });
};

export default useGames;
