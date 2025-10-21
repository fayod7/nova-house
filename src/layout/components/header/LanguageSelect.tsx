import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
const languages = [
  { code: "uz", label: "O'zbekcha", flag: "fi fi-uz fis" },
  { code: "ru", label: "Русский", flag: "fi fi-ru fis" },
  { code: "en", label: "English", flag: "fi fi-gb fis" },
];

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);


  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    
    <>
      <div className="relative w-[130px] text-[14px] max-[500px]:w-[105px] max-[500px]:text-[10px]">
      
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-full flex justify-between items-center rounded-md  bg-[#323232] px-3 py-2 text-[#fff] shadow-sm hover:border-gray-400 transition-all duration-200 ${
            isOpen ? "border-blue-500 shadow-md" : ""
          }`}
        >
          <span className="flex items-center gap-2">
            <span className={`${currentLang.flag} rounded-[50%]`}></span>
            <span>{currentLang.label}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

       
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-10"
            >
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`px-3 py-2 flex items-center gap-2 cursor-pointer transition-all duration-150 ${
                    i18n.language === lang.code
                      ? "bg-blue-50 text-black font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className={`${lang.flag} rounded-[50%]`}></span>
                  <span>{lang.label}</span>
                
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LanguageSelect;
