import { memo } from 'react';
import { BsTelegram } from "react-icons/bs";
const TelegramLink = () => {
  return (
    <div>
      <a href={import.meta.env.VITE_TELEGRAM_LINK} className='size-12 border telegram border-slate-700 bg-white rounded-full fixed top-[83%] right-[50px] grid place-items-center z-40'>
      <BsTelegram className='size-10 text-[#0088cc]  rounded-full p-1' />
      </a>
    </div>
  );
};

export default memo(TelegramLink);