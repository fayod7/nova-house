import { memo } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';

const Contact = () => {
  return (
    <div>
      <ReusableComp title='Contact' />
    </div>
  );
};

export default memo(Contact);