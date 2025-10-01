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

    


    return { getCategories, getCategoriesByType }
}