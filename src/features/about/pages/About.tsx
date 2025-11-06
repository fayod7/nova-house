import { memo, useEffect } from 'react';
import AboutComp from '../components/AboutComp';

import { useTranslation } from 'react-i18next';
import L from '../components/L';

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
      <L  title={t("reusable.about")}/>
      <AboutComp/>
    </div>
  );
};

export default memo(About);