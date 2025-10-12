import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCollections } from "../services/useCollections";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useTranslation } from "react-i18next";
import { useCategory } from "../services/useCategories";
import CollectionsView from "../components/CollectionsView";

const CollectionDetails = () => {
   
  const { id } = useParams();
  const { getCollectionsById } = useCollections();
  const toString = id?.toString();
  const { getCollectionCategories } = useCategory();
  const { data, isFetching } = getCollectionsById(toString);
  const { i18n,t } = useTranslation();
  
  const info = data?.data;
  const lang = i18n.language;
  const title =
    lang === "uz"
      ? info?.description_uz
      : lang === "ru"
      ? info?.description_ru
      : info?.description_en;

 useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, [id]);

  const { data: categoryItem } = getCollectionCategories(info?.category_id);
  console.log(categoryItem);

  if (isFetching) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-4 overflow-hidden relative"
          >
            <div className="h-[500px] bg-gray-200 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer" />
            </div>
           
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <section className="mb-[120px]">
        <div className="flex items-center justify-between h-[420px] max-[700px]:flex-col">
          <div className="h-[100%] w-[50%] max-[700px]:w-[100%]">
            <img
              className="block object-cover max-h-[100%] h-[100%] max-w-[100%] w-[100%]"
              src={`${import.meta.env.VITE_API_IMAGES}${
                info?.mainImage?.image_url
              }`}
              alt=""
            />
          </div>
          <div className="w-[50%] max-[700px]:w-[100%] h-[100%] flex items-center justify-center bg-[#f5f5f5]">
            <h2 className="text-[30px]  max-[700px]:py-[30px] font-extralight">
              {info?.title}
            </h2>
          </div>
        </div>
        <div className="container py-[60px] max-[700px]:mt-[100px]">
          <p className="font-extralight text-center ">{title}</p>
        </div>

        <div className=" container">
          <PhotoProvider className="">
            <div className="foo grid grid-cols-3 gap-[14px] max-[800px]:grid-cols-2 max-[520px]:gap-[8px]">
              {info?.images?.map((item: any) => (
                <PhotoView
                  key={item.id}
                  src={`${import.meta.env.VITE_API_IMAGES}${item?.image_url}`}
                >
                  <img
                    className=" w-[100%] object-cover bg-[#ddd]"
                    src={`${import.meta.env.VITE_API_IMAGES}${item?.image_url}`}
                    alt=""
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
          <div className="mt-[90px]">
            <h2 className="text-center mb-[40px] text-[30px] font-extralight">
              {t("similar")}
            </h2>
            <CollectionsView data={categoryItem?.data?.items} />
          </div>
        </div>
      </section>
    );
  }
};

export default memo(CollectionDetails);
