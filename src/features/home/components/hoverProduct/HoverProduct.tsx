import { memo, type FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";
import { MoveLeft, MoveRight } from "lucide-react";

interface Props {
  data: any;
}

const HoverProduct: FC<Props> = ({ data }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  console.log(data?.data?.items);

  return (
    <section>
      <div className=" w-full mx-auto relative mb-[120px]">
        <Swiper
          
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;

            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-[800px]"
        >
          {data?.data?.items?.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className=" flex items-center justify-center text-xl font-bold">
                <img
                  className="block w-full object-cover h-[800px] "
                  src={`https://images.carwashgo.uz/collections/${item.mainImage.image_url}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={prevRef} className="custom-prev select-none !important grid place-items-center">
          <MoveLeft />
        </div>
        <div ref={nextRef} className="custom-next select-none !important">
          <MoveRight/>
        </div>
      </div>
    </section>
  );
};

export default memo(HoverProduct);
