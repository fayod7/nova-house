import { memo } from 'react';
import logo from '../shared/assets/nova-logo.png'
const MainLoading = () => {
  return (
       <div className="flex justify-center items-center h-screen bg-[#1d1d1d]">
      <div className="flex flex-col items-center space-y-2">
        <div className='flex flex-col gap-2 items-center'>
            <img loading='eager' className='w-[140px] h-[120px]' src={logo} alt="" />
           <h2 className='text-[#c9c9c9] text-3xl font-light font-serif tracking-4 uppercase'>Nova house</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(MainLoading);
