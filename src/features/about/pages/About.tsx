import { memo, useEffect } from 'react';
import AboutComp from '../components/AboutComp';

const About = () => {
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, []);
  return (
    <div>
      <AboutComp/>
    </div>
  );
};

export default memo(About);