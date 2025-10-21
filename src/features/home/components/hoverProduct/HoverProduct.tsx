import { memo } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stone from "../../../../shared/assets/imageHomepage/inner1.jpg";
import ndStone from "../../../../shared/assets/imageHomepage/innder2.jpg";
import rdStone from "../../../../shared/assets/imageHomepage/inner3.jpg";

const HoverProduct = () => {
  return (
    <>
      <section className="max-[780px]:hidden">
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            infinite
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
            swipeable
          >
            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${stone})` }}
            ></div>
            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${ndStone})` }}
            ></div>
            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${rdStone})` }}
            ></div>
          </Carousel>
        </div>
      </section>
      <section className="hidden max-[780px]:block">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          infinite
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          swipeable
        >
          <div>
            <img className="block h-[700px] object-cover" src={stone} alt="" />
          </div>
          <div>
            <img
              className="block h-[700px] object-cover"
              src={ndStone}
              alt=""
            />
          </div>
          <div>
            <img
              className="block h-[700px] object-cover"
              src={rdStone}
              alt=""
            />
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default memo(HoverProduct);
