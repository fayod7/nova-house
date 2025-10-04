import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


export const categoriesKey = 'categoriesKey'

export const useCategory = () => {
    const getCategories = () => useQuery<any, any>({
        queryKey: [categoriesKey],
        queryFn: () => api.get('categories').then(res => res.data),
        gcTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 30
    })
    const getCategoriesByType = () => useQuery<any, any>({
        queryKey: [categoriesKey],
        queryFn: () => api.get('categories/by-type').then(res => res.data),
    })

    const getCollectionCategories = (categoryId: string | undefined | null | number) =>
        useQuery<any, any>({
          queryKey: [categoriesKey, categoryId],
          queryFn: () =>
            api.get(`collections/category/${categoryId}`).then((res) => res.data),
          enabled: !!categoryId,
          gcTime: 1000 * 60 * 60,
          staleTime: 1000 * 60 * 30,
        });
    


    return { getCategories, getCategoriesByType, getCollectionCategories }
}