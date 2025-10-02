import { memo } from 'react';
import { useParams } from 'react-router-dom';

const CollectionDetails = () => {
    const { id } = useParams()
    console.log(id);
    
  return (
    <div>
      <h2>CollectionDetails</h2>
    </div>
  );
};

export default memo(CollectionDetails);