import { memo, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import CalculatorForm from './components/calculator-form/CalculatorForm';
// import Subheader from './components/subheader/Subheader';

const MainLayout = () => {
  const [isShown, setIsShown] = useState<boolean>(false)
  return (
    <> 
    {/* <Subheader/> */}
        <Header/>
      <main>
        <Outlet/>
      </main>
      <Calculator setIsShown={setIsShown}/>
      <CalculatorForm isShown={isShown}/>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);