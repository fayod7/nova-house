import { memo } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import ContactsForm from '../components/ContactsForm';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t} = useTranslation()
  return (
    <div>
      <ReusableComp title='Contact' />
      <div className='bg-[#f5f5f5] w-full py-[100px]'>
          <div className='container flex flex-col gap-2 justify-center items-center'>
            <h2>
            {t("contactComp.title")}
          </h2>
          <h2>
            {t("contactComp.subtitle")}
          </h2>
          </div>
      </div>
      <ContactsForm/>
    </div>
  );
};

export default memo(Contact);