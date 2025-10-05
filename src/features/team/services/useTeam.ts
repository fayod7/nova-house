import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const teamKey = "teamKey";
export const useTeam = () => {
  const getTeamMembers = () =>
    useQuery<any, any>({
      queryKey: [teamKey],
      queryFn: () => api.get("team").then((res) => res.data),
    });

  return { getTeamMembers };
};
