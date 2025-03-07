import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
    // initialData: {
    //   results: [],
    // },
  })
};
export default usePlatforms;
