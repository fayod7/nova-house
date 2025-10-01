import { memo } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Subheader from './components/subheader/Subheader';

const MainLayout = () => {

  return (
    <> 
    <Subheader/>
        <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);