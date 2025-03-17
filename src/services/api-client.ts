import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "78ba6ee231344ff983aae5cb18e9ccf0",
  },
});



class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  get = (id: number | string) => {
    return axiosInstance
    .get<T>(this.endpoint + "/" + id)
    .then((res) => res.data);
  };
}

export default APIClient;
