import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"
import i18n from "../../../../i18n";

interface IParams {
    query: string;
}

const useSearchKey:string = 'useSearchKey'

export const useSearch = () => {
    const lang = i18n.language

    const getCollectionsBySearch = (params: IParams) => useQuery({
        queryKey: [useSearchKey, params, lang],
        queryFn: () => api.get("collections", { params: { search: params.query, lang } }).then(res => res.data),
        enabled: !!params.query
    })

    return { getCollectionsBySearch }
}