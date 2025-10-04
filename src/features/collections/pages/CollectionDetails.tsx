import { memo } from "react";
import { useParams } from "react-router-dom";
import { useCollections } from "../services/useCollections";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

const CollectionDetails = () => {
  const { id } = useParams();
  const { getCollectionsById } = useCollections();
  const toString = id?.toString();
  const { data, isFetching } = getCollectionsById(toString);
  const { i18n } = useTranslation();
  const info = data?.data;
  const lang = i18n.language;
  const title =
    lang === "uz"
      ? info?.description_uz
      : lang === "ru"
      ? info?.description_ru
      : info?.description_en;

  if (isFetching) {
    return (
      <section>
        <div>
          <p>loading</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="mb-[120px]">
        <div className="flex items-center justify-between h-[420px] max-[700px]:flex-col">
          <div className="h-[100%] w-[50%] max-[700px]:w-[100%]">
            <img
              className="block object-cover max-h-[100%] max-w-[100%] w-[100%]"
              src={`https://images.carwashgo.uz/collections/${info?.mainImage?.image_url}`}
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

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {info?.images?.map((item: any) => (
            <div className="h-[400px] px-[5px]" key={item.id}>
              <img
                className="max-h-[100%] h-[100%] w-[100%] object-cover"
                src={`https://images.carwashgo.uz/collections/${item?.image_url}`}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </section>
    );
  }
};

export default memo(CollectionDetails);
