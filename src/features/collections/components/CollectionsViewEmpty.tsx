import { X } from "lucide-react";
import { memo } from "react";

const CollectionsViewEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
       <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <X className="h-12 w-12 text-gray-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-gray-700">
        No Collections Found
      </h3>
      <p className="text-gray-500 mt-1">
        Try changing your filter or add new collections.
      </p>
    </div>
  );
};

export default memo(CollectionsViewEmpty);
