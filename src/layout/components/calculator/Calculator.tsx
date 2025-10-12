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
   <button
      onClick={() => setIsShown((prev) => !prev)}
      className={`group z-auto size-12 cursor-pointer transition-all duration-300
                  border bg-white border-slate-700 rounded-full grid place-items-center 
                  fixed top-[91%] ${isScroll ? "right-[50px]" : "-right-[50px]"} 
                  shadow-md hover:shadow-lg`}
    >
      <CalculatorIcon className="text-slate-800 size-7.5 transition-transform duration-300"/>
      <span
        className="absolute right-14 top-1/2 -translate-y-1/2 px-2 py-1 
                   bg-slate-800 text-white text-xs rounded-md opacity-0 
                   group-hover:opacity-100 group-hover:translate-x-0 
                   translate-x-2 transition-all duration-300 pointer-events-none"
      >
        Calculator
      </span>
    </button>
  );
};

export default memo(Calculator);