import { memo } from 'react';

const CollectionsViewSkeleton = () => {
  return (
    <div className="container grid grid-cols-3 gap-3 pb-1 max-[990px]:grid-cols-2 max-[470px]:grid-cols-1">
      {Array(6).fill(null).map((_, inx) => (
        <div key={inx} className="flex flex-col gap-2">
          <div className="w-full h-[300px] animation rounded-md"></div>

          <div className="flex flex-col gap-1.5 items-center py-3">
            <div className="h-5 w-32 animation rounded-md"></div>
            <div className="h-4 w-24 animation rounded-md"></div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default memo(CollectionsViewSkeleton);