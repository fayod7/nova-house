import { memo } from "react";

const LoadingSkeleton = () => {
  return (
    <div className="container  grid grid-cols-4 gap-5 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[600px]:gap-2">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden bg-gray-300/20 h-[400px] rounded-2xl p-3 flex flex-col gap-3"
        >
          
          <div className="absolute inset-0  -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

         
          <div className="bg-gray-400/30 h-[100%] rounded-xl"></div>

          
          <div className="bg-gray-400/40 h-4 w-3/4 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default memo(LoadingSkeleton);
