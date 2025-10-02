import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";



export const useCollection = () => {
  const getCollections = () =>
    useQuery<any, any>({
      queryKey: ["collections"],
      queryFn: () => api.get("collections").then((res) => res.data),
      retry: 0,
      staleTime: 1000 * 60 * 3,
      gcTime: 1000 * 60 * 10,
    });

  return {
    getCollections,
  };
};
