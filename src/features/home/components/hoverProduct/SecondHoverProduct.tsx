import { memo, } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import livingRoom from "../../../../shared/assets/livingRoom.jpg"
import bedroom from "../../../../shared/assets/bedroom.jpg"
import kitchen from "../../../../shared/assets/kitchen.jpg"

import "./HoverProduct.css"
const HoverProduct = () => {
  

  return (
    <section>
      <div>
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
              items: 1,
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
              items: 1,
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
          <div
            className="w-full bg-cover bg-center min-h-[800px] max-[700px]:min-h-[600px]"
            style={{ backgroundImage: `url(${livingRoom})` }}
          >
            <div className="hotspot top-[57%] left-[27%]"></div>
            <div className="hotspot top-[64%] left-[65%]"></div>
            <div className="hotspot top-[71%] left-[42%]"></div>
            <div className="hotspot top-[90%] left-[30%]"></div>
          </div>
          <div
            className="w-full bg-cover bg-center min-h-[800px] max-[700px]:min-h-[600px]"
            style={{ backgroundImage: `url(${bedroom})` }}
          >
            <div className="hotspot top-[54%] left-[81%]"></div>
            <div className="hotspot top-[68%] left-[77%]"></div>
            <div className="hotspot top-[71%] left-[42%]"></div>
          </div>
          <div
            className="w-full bg-cover bg-center min-h-[800px] max-[700px]:min-h-[600px]"
            style={{ backgroundImage: `url(${kitchen})` }}
          >
            <div className="hotspot top-[60%] left-[72%]"></div>
            <div className="hotspot top-[71%] left-[40%]"></div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default memo(HoverProduct);
