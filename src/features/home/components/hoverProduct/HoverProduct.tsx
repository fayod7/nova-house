import { memo, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./HoverProduct.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stone from "../../../../shared/assets/stone.jpg";
import ndStone from "../../../../shared/assets/ndStone.jpg";
import strangeChair from "../../../../shared/assets/hoverImages/antiqueChair.jpg";
import circleTable from "../../../../shared/assets/hoverImages/citcleTable.jpg";
import smallChairr from "../../../../shared/assets/hoverImages/smallChair.jpg";
import armchairr from "../../../../shared/assets/hoverImages/armchair2.jpg";
import tableSt from "../../../../shared/assets/hoverImages/tableStrange.jpg";
import circle from "../../../../shared/assets/hoverImages/citcleChair.jpg";
import tablee from "../../../../shared/assets/hoverImages/table1.jpg";

const HoverProduct = () => {
  const [armchair, setArmchair] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [smallChair, setSmallChair] = useState<boolean>(false);
  const [armChairNd, setArmChairNd] = useState<boolean>(false);
  const [strangeTable, setStrangeTable] = useState<boolean>(false);
  const [circleChair, setCircleChair] = useState<boolean>(false);
  const [tableNd, setTableNd] = useState<boolean>(false);

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
            >
              <div
                onMouseEnter={() => setArmchair(true)}
                onMouseLeave={() => setArmchair(false)}
                className="hotspot absolute top-[67%] left-[33%]"
              ></div>

              <div
                className={`card absolute top-[40%] left-[12%] transition-all duration-300 ${
                  armchair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={strangeChair} alt="Armchair" />
                  <h2 className="card-title">Armchair</h2>
                </div>
              </div>

              <div
                onMouseEnter={() => setTable(true)}
                onMouseLeave={() => setTable(false)}
                className="hotspot absolute top-[68%] left-[42%]"
              ></div>
              <div
                className={`card absolute top-[41%] left-[21%] z-10 transition-all duration-300 ${
                  table
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={circleTable} alt="Armchair" />
                  <h2 className="card-title">Coffee Table</h2>
                </div>
              </div>
              <div
                onMouseEnter={() => setSmallChair(true)}
                onMouseLeave={() => setSmallChair(false)}
                className="hotspot absolute top-[82%] left-[45%]"
              ></div>
              <div
                className={`card absolute top-[55%] left-[24%] z-10 transition-all duration-300 ${
                  smallChair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={smallChairr} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>
              <div
                onMouseEnter={() => setArmChairNd(true)}
                onMouseLeave={() => setArmChairNd(false)}
                className="hotspot absolute top-[82%] left-[65%]"
              ></div>
              <div
                className={`card absolute top-[55%] left-[44%] z-10 transition-all duration-300 ${
                  armChairNd
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={armchairr} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-[115vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${ndStone})` }}
            >
              <div
                onMouseEnter={() => setStrangeTable(true)}
                onMouseLeave={() => setStrangeTable(false)}
                className="hotspot absolute top-[60%] left-[65%]"
              ></div>
              <div
                className={`card absolute top-[34%] left-[45%] z-15 transition-all duration-300 ${
                  strangeTable
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={tableSt} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
                </div>
              </div>

              <div
                onMouseEnter={() => setTableNd(true)}
                onMouseLeave={() => setTableNd(false)}
                className="hotspot absolute top-[61%] left-[40%]"
              ></div>
              <div
                className={`card absolute top-[36%] left-[20%] z-15 transition-all duration-300 ${
                  tableNd
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
                onMouseEnter={() => setCircleChair(true)}
                onMouseLeave={() => setCircleChair(false)}
                className="hotspot absolute top-[68%] left-[47%]"
              ></div>
              <div
                className={`card absolute top-[42%] left-[27%] z-15 transition-all duration-300 ${
                  circleChair
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-6"
                }`}
              >
                <div className="inner-div">
                  <img src={circle} alt="Armchair" />
                  <h2 className="card-title">Side Table</h2>
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
        </Carousel>
      </section>
    </>
  );
};

export default memo(HoverProduct);
