import { memo } from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import HoverProduct from '../components/hoverProduct/HoverProduct';
import {useCollection} from "../service/useCollection"

const Home = () => {
  const { getCollections } = useCollection();
  const { data } = getCollections()
  
  

  return (
    <div >
      <Hero/>
      <Overview />
      <HoverProduct data={ data} />
    </div>
  );
};

export default memo(Home);