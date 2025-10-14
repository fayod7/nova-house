import { memo, useEffect } from 'react';
import AboutComp from '../components/AboutComp';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import { useTranslation } from 'react-i18next';

const About = () => {
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, []);
 const {t} = useTranslation()
  return (
    <div>
      <ReusableComp  title={t("reusable.about")}/>
      <AboutComp/>
    </div>
  );
};

export default memo(About);