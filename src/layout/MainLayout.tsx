import { memo } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);