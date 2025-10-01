import { memo } from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';

const Home = () => {
  return (
    <div >
      <Hero/>
      <Overview/>
    </div>
  );
};

export default memo(Home);