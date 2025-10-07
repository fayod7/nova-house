import { memo, useEffect, useState, type Dispatch, type FC, type SetStateAction } from 'react';
import {  CalculatorIcon } from 'lucide-react';

interface Props {
    setIsShown: Dispatch<SetStateAction<boolean>>;
}

const Calculator:FC<Props> = ({ setIsShown }) => {
      const [isScroll, setIsScroll] = useState<boolean>(false)
    useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <button onClick={() => setIsShown(prev => !prev)} className={`size-10 border bg-white border-slate-700 rounded-full grid place-items-center fixed top-[90%] duration-300 ${isScroll ? 'right-[50px]': '-right-[50px]'}`}>
          <CalculatorIcon/>
        </button>
    </div>
  );
};

export default memo(Calculator);