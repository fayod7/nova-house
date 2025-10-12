import { memo, useEffect } from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import HoverProduct from "../components/hoverProduct/HoverProduct";

import Text from "../components/Text";
import SecondHoverProduct from "../components/hoverProduct/SecondHoverProduct";
import TelegramLink from "../components/TelegramLink";

const Home = () => {
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, []);
  return (
    <div>
      <Hero />
      <TelegramLink/>
      <Overview />
      <HoverProduct />
      <Text />
      <SecondHoverProduct />
    </div>
  );
};

export default memo(Home);
