import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const navigate = useNavigate()
  return (
    <div className='container py-[40px] flex items-center flex-col gap-7'>
      <h2 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde ex illo harum pariatur dignissimos nemo dolores optio iusto saepe maxime quas tempore facilis ut possimus suscipit delectus, impedit eos.</h2>
      <button 
        className='py-3 px-10 border bg-white cursor-pointer hover:bg-black hover:text-white duration-200'
      onClick={() => navigate('/about')}>Discover</button>
    </div>
  );
};

export default memo(Overview);