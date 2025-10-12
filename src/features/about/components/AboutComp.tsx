import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutComp = () => {
    const {t} = useTranslation()
  return (
    <section className='flex flex-col gap-7 w-full py-[70px]'>
        <div className='container flex flex-col gap-5 border-l border-gray-300'>
            <h2 className='text-6xl max-w-[400px] pl-7 font-semibold max-[650px]:text-3xl'>{t("about.top.title")}</h2>
            <h3 className='text-xl max-w-[300px] pl-7 font-medium text-gray-700'>{t("about.top.subtitle")}</h3>
        </div>
            <div className='w-full bg-gray-300 py-10'>
                <div className='container flex justify-end'>
                   <div className='max-w-[600px] flex flex-col gap-6'>
                     <h2 className='text-white text-2xl'>
                        {t("about.mid.title")}
                    </h2>
                    <p className='text-white text-[16px]/[1.5]'>
                    {t("about.mid.desc")}
                    </p>
                    <p className='text-white text-[16px]/[1.5]'>
                       {t("about.mid.detail")}
                    </p>
                   </div>
                </div>
            </div>
            <ul className="flex container items-center justify-between flex-wrap max-[620px]:flex-col max-[620px]:items-start">
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">22</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>{t("about.ulCollection.years")}</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">282+</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>{t("about.ulCollection.projects")}</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">420k</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>{t("about.ulCollection.covered")}</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">93%</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>{t("about.ulCollection.feedbacks")}</span>
            </li>
            
            </ul>
    </section>
  );
};

export default memo(AboutComp);