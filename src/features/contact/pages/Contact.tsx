import { memo } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import ContactsForm from '../components/ContactsForm';

const Contact = () => {
  return (
    <div>
      <ReusableComp title='Contact' />
      <div className='bg-[#f5f5f5] w-full py-[100px]'>
          <div className='container flex flex-col gap-2 justify-center items-center'>
            <h2>We maintain the same dedication to quality and attention to detail in our after-sales services as we do in delivering our products and services.
          </h2>
          <h2>
             We stand by your side whenever you need us, never compromising on our reliability and commitment to customer satisfaction!
          </h2>
          </div>
      </div>
      <ContactsForm/>
    </div>
  );
};

export default memo(Contact);