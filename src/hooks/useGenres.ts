import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
    //initial data
  });
}

// using static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
