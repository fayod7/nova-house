import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

interface IParams {
    query: string;
}

const useSearchKey:string = 'useSearchKey'

export const useSearch = () => {

    const getCollectionsBySearch = (params: IParams) => useQuery({
        queryKey: [useSearchKey, params],
        queryFn: () => api.get("collections", { params: { search: params.query } }).then(res => res.data),
        enabled: !!params.query
    })

    return { getCollectionsBySearch }
}