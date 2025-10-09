import { memo } from 'react';
import { FaTelegram } from 'react-icons/fa';

const TelegramLink = () => {
  return (
    <div>
      <a href={import.meta.env.VITE_TELEGRAM_LINK} className='size-10 border telegram border-slate-700 bg-white rounded-full fixed top-[83%] right-[50px] grid place-items-center z-40'>
        <FaTelegram className='size-7'/>
      </a>
    </div>
  );
};

export default memo(TelegramLink);