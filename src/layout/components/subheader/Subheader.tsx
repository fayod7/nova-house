import { Instagram } from 'lucide-react';
import { memo } from 'react';

const Subheader = () => {
    
  return (
    <div className='w-full text-white bg-black py-2 duration-300'>
        <div className='container flex items-center justify-between'>
           <div className='flex items-center gap-2'>
             <button className='font-semibold cursor-pointer'>UZ</button>
            <button className='font-semibold cursor-pointer'>EN</button>
            <button className='font-semibold cursor-pointer'>RU</button>
           </div>
            <a href='#' className='flex items-center gap-1'>
                <Instagram />
                <span>1.1M Followers</span>
            </a>
        </div>
    </div>
  );
};

export default memo(Subheader);