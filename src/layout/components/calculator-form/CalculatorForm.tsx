import { memo, useState, type FC, type FormEvent } from 'react';

interface Props {
    isShown: boolean
}

const CalculatorForm:FC<Props> = ({ isShown }) => { 
    const [value, setValue] = useState('')
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value);
        
    }
  return (
  <div>
  <form
  onSubmit={handleSubmit}
    className={`size-[400px] flex flex-col max-[500px]:size-[300px] py-5 px-4 rounded-[10px] shadow-ld border border-gray-200 z-50 bg-white fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${
      isShown
        ? 'top-1/2 -translate-y-1/2 opacity-100'
        : '-top-[400px] opacity-0'
    }`}
  > 
  <div className='flex flex-col gap-[5px]'>
    <label htmlFor="inputNum">Write in square metres:</label>
    <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
     id='inputNum' 
    type="number" 
    className="py-[8px] indent-3 w-full focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]" placeholder="Insert a number to calculate" />
  </div>
 <div>
   <button className='px-4 py-2.5'>submit</button>
 </div>
  </form>
</div>

  );
};

export default memo(CalculatorForm);