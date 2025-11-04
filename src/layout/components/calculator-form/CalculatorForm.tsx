import { X } from 'lucide-react';
import { memo, useEffect, useState, type Dispatch, type FC, type FormEvent, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    isShown: boolean;
    setIsShown: Dispatch<SetStateAction<boolean>>;
}

const CalculatorForm:FC<Props> = ({ isShown, setIsShown }) => { 
    const [value, setValue] = useState('')
    const [isFirstTime, setIsFirstTime] = useState<boolean>(false)
    const [calc, setCalc] = useState<number | null>(null)
     useEffect(() => {
    const storedFlag = localStorage.getItem('isFirstTimeUser');
    if (storedFlag === 'false') {
      setIsFirstTime(false);
    }
  }, []);
  useEffect(() => {
  if (value) {
    const res = Number(value);
    setCalc(calculateValue(res, isFirstTime));
  }
}, [value, isFirstTime]);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!value.trim()) {
    setCalc(null); 
    return;
  }
        const res = Number(value)
        setCalc(calculateValue(res, isFirstTime))
        localStorage.setItem('isFirstTimeUser', 'false');
        setValue('')
    }
  const calculateValue = (value: number, isFirstTime: boolean) => {
     return isFirstTime ? value * 12 : value * 15;
  }
  useEffect(() => {
  if (!value) {
    setCalc(null);
  } else {
    const res = Number(value);
    setCalc(calculateValue(res, isFirstTime));
  }
}, [value, isFirstTime]);
  const {t} = useTranslation()
  return (
<>
  
  <form
  onSubmit={handleSubmit}
    className={`size-[400px] flex flex-col gap-4 max-[500px]:size-[300px] py-5 px-4 rounded-[10px] shadow-ld border border-gray-200 z-50 bg-white fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${
      isShown
        ? 'top-1/2 -translate-y-1/2 opacity-100'
        : '-top-[400px] opacity-0'
    }`}
  > 
  <div className='flex items-center justify-between'>
    <h2 className='text-lg font-medium'>{t("calc.calculatePer")}</h2>
    <X className='cursor-pointer' onClick={() => setIsShown(false)}/>
  </div>
  <div className='flex flex-col gap-[5px]'>
    <label htmlFor="inputNum">{t("calc.write")}:</label>
    <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
     id='inputNum' 
    type="number" 
    className="py-[8px] indent-3 w-full focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder={t("calc.placeholder")} />
  </div>
       <div className="flex items-center gap-2">
          <input
            id="firstTime"
            type="checkbox"
            checked={isFirstTime}
            onChange={(e) => 
               {
    const checked = e.target.checked;
    setIsFirstTime(checked);
    if (value) {
      const res = Number(value);
      setCalc(calculateValue(res, checked));
    }}
            }
          />
          <label htmlFor="firstTime">{t("calc.checkbox")}?</label>
        </div>

 {calc !== null && typeof calc === 'number' && (
  <p className='text-[20px]'>
    {t("calc.total")} <strong className='text-green-800'>{calc}$</strong>
  </p>
)}

  </form>
     {isShown && (
  <div
    onClick={() => setIsShown(false)}
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
  ></div>
)}

</>

  );
};

export default memo(CalculatorForm);