import { memo, type FC } from 'react';



interface ICategory {
  id: number;
  name: string;
  type: "interior" | "exterior" | string; 
  createdAt: string; 
  updatedAt: string; 
}

interface Image {
  id: number;
  collection_id: number;
  image_url: string;
  createdAt: string; 
  updatedAt: string; 
}
interface ICollection {
  id: number;
  title: string;
  description: string;       
  description_en: string;
  description_ru: string;
  description_uz: string;
  added_admin_id: number;
  category_id: number;
  category: ICategory;
  main_image_id: number;
  mainImage: Image;
  images: Image[];
  createdAt: string; 
  updatedAt: string; 
}

interface Props{
  data: ICollection[]
}

const CollectionsView:FC<Props> = ({ data }) => {
  console.log(data);
  
  return (
    <div className='container grid grid-cols-3 gap-3 pb-10'>
      {
        data?.map((item:ICollection)=> (
          <div key={item.id} className='flex flex-col gap-2'>
              <div className='w-full'>
                {/* <img src={item.images[0]} alt="" /> */}
              </div>
              <div className='flex flex-col gap-1.5 items-center py-3'>
                <h2 className='text-lg font-medium'>{item.title}</h2>
                <p className='text-gray-500'>Collection, {item.category.name}</p>
              </div>
          </div>
        ))
      }
    </div>
  );
};

export default memo(CollectionsView);