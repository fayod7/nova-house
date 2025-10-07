import { memo, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import livingRoom from "../../../../shared/assets/livingRoom.jpg";
import bedroom from "../../../../shared/assets/bedroom.jpg";
import kitchen from "../../../../shared/assets/kitchen.jpg";
import polka from "../../../../shared/assets/hoverImages/polka.jpg";
import tablee from "../../../../shared/assets/hoverImages/table.jpg";
import cornerArmChair from "../../../../shared/assets/hoverImages/armChair.jpg";
import tvChair from "../../../../shared/assets/hoverImages/tvChair.jpg";
import sofaa from "../../../../shared/assets/hoverImages/sofa.jpg";
import pouf from "../../../../shared/assets/hoverImages/chair.jpg";
import stone from "../../../../shared/assets/hoverImages/stoneMirror.jpg";
import kitchenn from "../../../../shared/assets/hoverImages/kitchenChair.jpg";
import stoneTableKitchen from "../../../../shared/assets/hoverImages/stoneTable.jpg";

import "./HoverProduct.css";

const HoverProduct = () => {
  const [shkaf, setShkaf] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [armchair, setArmchair] = useState<boolean>(false);
  const [chair, setChair] = useState<boolean>(false);
  const [sofa, setSofa] = useState<boolean>(false);
  const [bedChair, setBedChair] = useState<boolean>(false);
  const [stoneMirror, setStoneMirror] = useState<boolean>(false);
  const [kitchenChair, setKitchenChair] = useState<boolean>(false);
  const [stoneTable, setStoneTable] = useState<boolean>(false);
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
            >
              <div
                onMouseEnter={() => setShkaf(true)}
                onMouseLeave={() => setShkaf(false)}
                className="hotspot top-[57%] left-[27%]"
              ></div>
              <div
                className={`card absolute top-[32%] left-[7%] z-15 transition-all duration-300 ${
                  shkaf
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={polka} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>

              <div
                className={`card absolute top-[45%] left-[22%] z-15 transition-all duration-300 ${
                  table
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={tablee} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>

              <div
                onMouseEnter={() => setTable(true)}
                onMouseLeave={() => setTable(false)}
                className="hotspot top-[71%] left-[42%]"
              ></div>

              <div
                onMouseEnter={() => setArmchair(true)}
                onMouseLeave={() => setArmchair(false)}
                className="hotspot top-[90%] left-[30%]"
              ></div>
              <div
                className={`card absolute top-[65%] left-[10%] z-15 transition-all duration-300 ${
                  armchair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={cornerArmChair} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>
              <div
                onMouseEnter={() => setChair(true)}
                onMouseLeave={() => setChair(false)}
                className="hotspot top-[62%] left-[65%]"
              ></div>
              <div
                className={`card absolute top-[37%] left-[46%] z-15 transition-all duration-300 ${
                  chair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={tvChair} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${bedroom})` }}
            >
              <div
                onMouseEnter={() => setStoneMirror(true)}
                onMouseLeave={() => setStoneMirror(false)}
                className="hotspot top-[53%] left-[81%]"
              ></div>
              <div
                className={`card absolute top-[28%] left-[61%] z-15 transition-all duration-300 ${
                  stoneMirror
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={stone} alt="Armchair" />
                  <h2 className="card-title">Dresser</h2>
                </div>
              </div>
              <div
                onMouseEnter={() => setBedChair(true)}
                onMouseLeave={() => setBedChair(false)}
                className="hotspot top-[65%] left-[77%]"
              ></div>
              <div
                className={`card absolute top-[40%] left-[57%] z-15 transition-all duration-300 ${
                  bedChair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={pouf} alt="Armchair" />
                  <h2 className="card-title">Chair</h2>
                </div>
              </div>

              <div
                onMouseEnter={() => setSofa(true)}
                onMouseLeave={() => setSofa(false)}
                className="hotspot top-[71%] left-[42%]"
              ></div>
              <div
                className={`card absolute top-[46%] left-[22%] z-15 transition-all duration-300 ${
                  sofa
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={sofaa} alt="Armchair" />
                  <h2 className="card-title">Sofa</h2>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${kitchen})` }}
            >
              <div
                onMouseEnter={() => setStoneTable(true)}
                onMouseLeave={() => setStoneTable(false)}
                className="hotspot top-[55%] left-[76%]"
              ></div>
              <div
                className={`card absolute top-[30%] left-[56%] z-15 transition-all duration-300 ${
                  stoneTable
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={stoneTableKitchen} alt="Armchair" />
                  <h2 className="card-title">Table</h2>
                </div>
              </div>
              <div
                onMouseEnter={() => setKitchenChair(true)}
                onMouseLeave={() => setKitchenChair(false)}
                className="hotspot top-[72%] left-[40%]"
              ></div>{" "}
              <div
                className={`card absolute top-[47%] left-[20%] z-15 transition-all duration-300 ${
                  kitchenChair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={kitchenn} alt="Armchair" />
                  <h2 className="card-title">Chair</h2>
                </div>
              </div>
            </div>
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
            <img className="block h-[700px] object-cover" src={livingRoom} alt="" />
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
