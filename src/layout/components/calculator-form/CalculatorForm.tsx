import { memo, useEffect, useState, type Dispatch, type FC, type FormEvent, type SetStateAction } from 'react';

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
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = Number(value)
        setCalc(calculateValue(res, isFirstTime))
        localStorage.setItem('isFirstTimeUser', 'false');
        setValue('')
    }
  const calculateValue = (value: number, isFirstTime: boolean) => {
     return isFirstTime ? value * 12 : value * 15;
  }
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
  <h2 className='text-lg font-medium'>Calculation per square meter</h2>
  <div className='flex flex-col gap-[5px]'>
    <label htmlFor="inputNum">Write in square metres:</label>
    <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
     id='inputNum' 
    type="number" 
    className="py-[8px] indent-3 w-full focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Insert a number to calculate" />
  </div>
       <div className="flex items-center gap-2">
          <input
            id="firstTime"
            type="checkbox"
            checked={isFirstTime}
            onChange={(e) => setIsFirstTime(e.target.checked)}
          />
          <label htmlFor="firstTime">First-time user?</label>
        </div>
    
 <div>
   <button className='px-6 py-2.5 border'>submit</button>
 </div>

 {
  calc && typeof calc == 'number' && 
  <p className='text-[20px]'>Your total is <strong>{calc ? calc : calc.toString()}</strong>$</p>
 }
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