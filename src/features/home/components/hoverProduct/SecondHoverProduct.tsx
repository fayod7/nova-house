import { memo,  } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import livingRoom from "../../../../shared/assets/imageHomepage/out1.jpg";
import bedroom from "../../../../shared/assets/imageHomepage/out2.jpg";
import kitchen from "../../../../shared/assets/imageHomepage/out3.jpg";

import "./HoverProduct.css";

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
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${livingRoom})` }}
            ></div>

            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${bedroom})` }}
            ></div>
            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${kitchen})` }}
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
          <div>
            <img
              className="block h-[700px] object-cover"
              src={livingRoom}
              alt=""
            />
          </div>
          <div>
            <img
              className="block h-[700px] object-cover"
              src={bedroom}
              alt=""
            />
          </div>
          <div>
            <img
              className="block h-[700px] object-cover"
              src={kitchen}
              alt=""
            />
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default memo(HoverProduct);
