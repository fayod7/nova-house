
import { X } from "lucide-react";
import { memo, useState, type FC } from "react";
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
  
const [selectedUser, setSelectedUser] = useState<IMember | null>(null);

  return (
    <>
      <div className="container grid grid-cols-4 gap-5 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[600px]:gap-2">
        {data?.map((user: IMember) => (
          <div
            onClick={() => {
              if (window.innerWidth <= 750) setSelectedUser(user);
            }}
            key={user.id}
            className="group relative overflow-hidden shadow-md"
          >
            <img
              src={`${import.meta.env.VITE_API_IMAGES}${user.image_url}`}
              alt={user.full_name}
              className="w-full h-[400px] object-cover max-[571px]:h-[300px]"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-full
                   bg-[#0000008d] max-[750px]:hidden
                   
                   transition-all duration-500 ease-linear
                   flex flex-col items-center justify-end
                   opacity-0 group-hover:opacity-100
                   z-10"
            >
              <p className="text-gray-100  absolute top-[110%] group-hover:top-[58%] duration-300   text-[16px] text-center drop-shadow-md pb-10 max-[700px]:text-[14px]">
                {user.position}
              </p>

              <p className="teamdesc px-[12px]  text-gray-200 text-[14px] absolute top-[120%] group-hover:top-[66%] duration-300   text-lg text-center drop-shadow-md pb-10 max-[700px]:text-[14px]">
                {lang === "uz"
                  ? user.description_uz
                  : lang === "ru"
                  ? user.description_ru
                  : user.description_en}
              </p>
            </div>
            <h3 className="text-team absolute w-full bottom-1 left-[50%] translate-x-[-50%] mx-auto text-center z-20 text-white font-semibold text-[25px]/[1.0]   px-3 duration-300 group-hover:bottom-[45%] group-hover:bg-[transparent] group-hover:translate-y-[50%] max-[750px]:group-hover:bottom-4  max-[700px]:text-[20px]">
              {user.full_name}
            </h3>
          </div>
        ))}
      </div>
      {/* --------------------- */}

      {selectedUser && (
        <div
          onClick={() => setSelectedUser(null)}
          className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4"
        >
          <X onClick={() => setSelectedUser(null)} className="w-[30px] h-[30px] absolute z-1000 top-[30px] right-[20px] text-[#fff]" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[10px] max-w-[380px] w-full shadow-lg overflow-hidden animate-[fadeIn_0.3s_ease] relative h-[480px]  p-[10px]"
          >
            <div className="absolute top-0 left-0 w-full h-[100%] bg-[#0000006f] z-30">
            
            </div>
            <img
              src={`${import.meta.env.VITE_API_IMAGES}${
                selectedUser.image_url
              }`}
              alt={selectedUser.full_name}
              className="w-full absolute h-[100%]  top-0 object-cover left-0"
            />
            <div className="p-5 text-center absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] z-1000 text-[#fff]">
              <h3 className=" font-semibold text-[26px]">
                {selectedUser.full_name}
              </h3>
              <p className="  font-medium">
                {selectedUser.position}
              </p>
              <p className=" mt-3 text-sm leading-relaxed">
                {lang === "uz"
                  ? selectedUser.description_uz
                  : lang === "ru"
                  ? selectedUser.description_ru
                  : selectedUser.description_en}
              </p>
            </div>
           
          </div>
        </div>
      )}
    </>
  );
};

export default memo(TeamComp);
