import { memo, useEffect, useState } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import ContactsForm from '../components/ContactsForm';
import { useTranslation } from 'react-i18next';
import SuccessModal from '../components/SuccessModal';
const Contact = () => {
  const {t} = useTranslation()
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, []);
   useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);
  const handleSuccess = () => {
    setShowSuccess(true);
  };
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
      <ContactsForm  handleSuccess={handleSuccess}/>
      {showSuccess && <SuccessModal  setShowSuccess={setShowSuccess}/>}
    </div>
  );
};

export default memo(Contact);