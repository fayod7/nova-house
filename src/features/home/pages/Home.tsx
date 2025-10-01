import { memo } from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div >
      <Hero/>
    </div>
  );
};

export default memo(Home);