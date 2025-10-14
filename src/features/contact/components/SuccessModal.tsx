import { Check, X } from 'lucide-react';
import { memo, type Dispatch, type FC, type SetStateAction } from 'react';

interface Props {
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const SuccessModal:FC<Props> = ({ setShowSuccess }) => {
  return (
    <div className='w-full h-screen fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center'>
      <div className='bg-white rounded-md z-auto size-[400px] flex items-center justify-center relative max-[500px]:size-[200px]'>
        <X
        onClick={() => setShowSuccess(false)}
        className='absolute top-[15px] right-[15px]'/>
        <div className='size-[150px] max-[500px]:size-[100px] rounded-full border-[4px] border-green-600 grid place-items-center'>
            <Check  className='size-[80px] max-[500px]:size-[60px] text-green-600'/>
        </div>
      </div>
    </div>
  );
};

export default memo(SuccessModal);