import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const collectionsKey = "collectionsKey";
export const useCollections = () => {
  const getCollections = (enabled: boolean = true) =>
    useQuery<any, any>({
      queryKey: [collectionsKey],
      queryFn: () => api.get("collections").then((res) => res.data),
      enabled,
      gcTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 30,
    });

  const getCollectionsById = (categoryId: string | undefined | null | number) =>
    useQuery<any, any>({
      queryKey: [collectionsKey, categoryId],
      queryFn: () =>
        api.get(`collections/${categoryId}`).then((res) => res.data),
      enabled: !!categoryId,
      gcTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 30,
    });
  console.log(api);
  

  return { getCollections, getCollectionsById };
};
