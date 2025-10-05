import { memo } from 'react';
import AboutComp from '../components/AboutComp';

const About = () => {
  return (
    <div>
      <AboutComp/>
    </div>
  );
};

export default memo(About);