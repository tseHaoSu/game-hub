import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "@/services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
    // initialData: {
    //   results: [],
    // },
  });
};
export default usePlatforms;
