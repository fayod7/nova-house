import { memo } from "react";
import { useParams } from "react-router-dom";
import { useCollections } from "../services/useCollections";

const CollectionDetails = () => {
  const { id } = useParams();
  const { getCollectionsById } = useCollections();
  const toString = id?.toString();
  const { data } = getCollectionsById(toString);
  const info = data?.data;

  return (
    <section className="mb-[120px]">
      <div className="flex items-center justify-between h-[420px]">
        <div className="h-[100%] w-[50%]">
          <img
            className="block object-cover max-h-[100%] max-w-[100%] w-[100%]"
            src={`https://images.carwashgo.uz/collections/${info?.mainImage?.image_url}`}
            alt=""
          />
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-center bg-[#f5f5f5]">
          <h2 className="text-[30px] font-extralight">{info?.title}</h2>
        </div>
      </div>
      <div className="container py-[60px]">
        <p className="font-extralight text-center ">{info?.description_en}</p>
      </div>
      <div className="grid grid-cols-2 gap-[20px] ">
        {info?.images?.map((item: any) => (
          <div className="h-[400px]" key={item.id}>
            <img
              className="max-h-[100%] w-[100%] "
              src={`https://images.carwashgo.uz/collections/${item?.image_url}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(CollectionDetails);
