import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
  });
}

// using static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
