import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

export interface IMember {
  id: number;
  full_name: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  position: string;
  phone: string;
  image_url: string;
}

interface Props {
  data: IMember[];
}

const TeamComp: FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  console.log(data);
  const lang = i18n.language;

  return (
    <div className="container grid grid-cols-4 gap-5 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[600px]:gap-2">
      {data?.map((user: IMember) => (
        <div key={user.id} className="group relative overflow-hidden shadow-md">
          <img
            src={`${import.meta.env.VITE_API_IMAGES}${user.image_url}`}
            alt={user.full_name}
            className="w-full h-[400px] object-cover max-[571px]:h-[300px]"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-full
                   bg-[#0000008d]
                   
                   transition-all duration-500 ease-linear
                   flex flex-col items-center justify-end
                   opacity-0 group-hover:opacity-100
                   z-10"
          >
            <p className="text-gray-100 absolute top-[110%] group-hover:top-[53%] duration-300  text-lg text-center drop-shadow-md pb-10 max-[700px]:text-[14px]">
              {user.position}
            </p>

            <p className="teamdesc px-[12px]  text-gray-200 text-[14px] absolute top-[120%] group-hover:top-[60%] duration-300   text-lg text-center drop-shadow-md pb-10 max-[700px]:text-[14px]">
              {lang === "uz"
                ? user.description_uz
                : lang === "ru"
                ? user.description_ru
                : user.description_en}
            </p>
          </div>
          <h3 className="text-team absolute w-full bottom-1 left-[50%] translate-x-[-50%] mx-auto text-center z-20 text-white font-semibold text-[25px]/[1.0]   px-3 duration-300 group-hover:bottom-[50%] group-hover:bg-[transparent] group-hover:translate-y-[50%] max-[700px]:text-[20px]">
            {user.full_name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default memo(TeamComp);
//   {
//     data?.map((user:IMember) => (
//          <div key={user.id} className="bg-white duration-300 relative">
//   <div className="h-[400px] w-full overflow-hidden max-[571px]:h-[300px]">
//     <img
//       src={`${import.meta.env.VITE_API_IMAGES}${user.image_url}`}
//       alt={user.id.toString()}
//       className="h-full w-full object-cover duration-500"
//     />
//   </div>

//    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

//   <div className="absolute bottom-8 left-0 w-full z-20 text-center px-3">
//     <h3 className="text-white font-semibold text-[25px]/[1.0] text-wrap">{user.full_name}</h3>
//     <p className="text-gray-200 text-lg">{user.position}</p>
//   </div>
// </div>
//     ))
//   }
