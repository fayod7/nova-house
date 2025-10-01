import { memo, type FC } from 'react';
import heroBg from '../../../shared/assets/hero.jpg'


interface Props {
    title: string
}

const ReusableComp:FC<Props> = (props) => {
    const { title } = props
  return (
    <div 
    style={{ backgroundImage: `url(${heroBg})` }}
    className='w-full h-[450px] bg-cover bg-center grid place-items-center'>
      <h2 className='text-white text-3xl font-medium'>
        {title}
      </h2>
    </div>
  );
};

export default memo(ReusableComp);