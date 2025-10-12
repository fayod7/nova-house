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
  console.log(data);
  
  return (
    <div className='container grid grid-cols-4 gap-5 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[600px]:gap-2'>
{data?.map((user: IMember) => (
  <div
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
                 bg-black/30 backdrop-blur-[2px]
                 translate-y-full group-hover:translate-y-0
                 transition-all duration-500 ease-out
                 flex flex-col items-center justify-end
                 opacity-0 group-hover:opacity-100
                 z-10"
    >
      <h3 className="text-white text-2xl font-semibold mb-1 text-center drop-shadow-md">
        {user.full_name}
      </h3>
      <p className="text-gray-100 text-lg text-center drop-shadow-md pb-10">
        {user.position}
      </p>
    </div>
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