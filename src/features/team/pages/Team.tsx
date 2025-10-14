import { memo } from "react";
import { useTeam } from "../services/useTeam";
import TeamComp from "../components/TeamComp";
import { useTranslation } from "react-i18next";
import LoadingSkaleton from "../components/LoadingSkaleton";

const Team = () => {
  const { getTeamMembers } = useTeam();
  const { data, isFetching } = getTeamMembers();
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#f4f5f5] py-[60px] flex flex-col gap-5">
      <div className="container">
        <h2 className="text-3xl/[1.4] font-medium">
         {t("team-title")}
        </h2>
        <p className=" max-w-[500px] w-[100%]  mb-[20px] font-extralight  text-[#848484] ">
          {t("team-desc")}
        </p>
      </div>
      <h2 className="container font-light text-[22px] mb-[16px]">{ t("team-members")}</h2>
      {isFetching ? <LoadingSkaleton /> : <TeamComp data={data} />}
    </section>
  );
};

export default memo(Team);
