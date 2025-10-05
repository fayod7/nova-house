import { memo, type FC } from 'react';


export interface IMember {
  id: number;
  full_name: string;
  description: string;
  position: string;
  phone: string;
  image_url: string;
}


interface Props{
    data: IMember[]
}

const TeamComp:FC<Props> = ({data}) => {
  return (
    <div className='container grid grid-cols-4 gap-5 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[600px]:gap-2'>
      {
        data?.map((user:IMember) => (
             <div className="bg-white duration-300 relative">
      <div className="h-[400px] w-full overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_IMAGES}${user.image_url}`}
          alt={user.id.toString()}
          className="h-full w-full object-cover hover:scale-95 transition-transform duration-500"
        />
      </div>

       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute -bottom-8 left-0 w-[85%] z-20 text-center px-3 bg-gray-500">
        <h3 className="text-white font-semibold text-lg">{user.full_name}</h3>
        <p className="text-gray-200 text-sm">{user.position}</p>
      </div>
    </div>
        ))
      }
    </div>
  );
};

export default memo(TeamComp);