import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../shared/assets/nova-logo.svg";
import { Instagram, Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className="w-full text-white bg-black  py-2 duration-300">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => i18n.changeLanguage("uz")}
                className="font-semibold cursor-pointer"
              >
                UZ
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="font-semibold cursor-pointer"
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("ru")}
                className="font-semibold cursor-pointer"
              >
                RU
              </button>
            </div>
            <a href="#" className="flex items-center gap-1">
              <Instagram />
              <span>1.1M Followers</span>
            </a>
          </div>
        </div>
      <header
        className={`w-full text-white sticky top-0 left-0 z-100 transition-all duration-300
          ${isScroll ? " bg-[#1e1e1e] " : "bg-[#00000097]"}`}
      >
        <nav className="container flex items-center justify-between">
          <ul
            className={`gap-4 items-center hidden md:flex transition-all duration-300
            ${isScroll ? "text-sm" : "text-[16px]"}`}
          >
            <li>
              <Link to={"/"}>{t("header.home")}</Link>
            </li>
            <li>
              <Link to={"/collections"}>{t("header.collection")}</Link>
            </li>

            <li>
              <Link to={"/team"}>{t("header.team")}</Link>
            </li>
          </ul>

          <Link to={"/"} className="transition-all duration-300">
            <img
              src={logo}
              alt=""
              className={`${
                isScroll ? "w-[75px]" : "w-[100px]"
              } transition-all duration-300 `}
            />
          </Link>

          <ul
            className={`gap-4 items-center hidden md:flex transition-all duration-300
            ${isScroll ? "text-sm" : "text-[16px]"}`}
          >
            <li>
              <Link to={"/about"}>{t("header.about")}</Link>
            </li>
            <li>
              <Link to={"/company"}>{t("header.company")}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{t("header.contact")}</Link>
            </li>
            <li>
              <Link to={"/search"}>
                <Search
                  className={`transition-all duration-300 ${
                    isScroll ? "size-[20px]" : "size-[25px]"
                  }`}
                />
              </Link>
            </li>
          </ul>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[999] backdrop-blur-sm"
        >
          <div
            className={`md:hidden bg-white text-black absolute top-0 w-[250px] duration-300 h-screen 
            ${isOpen ? "right-0" : "left-[-250px]"}`}
          >
            <ul className="flex flex-col gap-4 p-6 text-lg">
              <li
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5"
              >
                Close <X className="w-7 h-7" />
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" onClick={() => setIsOpen(false)}>
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/company" onClick={() => setIsOpen(false)}>
                  Company
                </Link>
              </li>
              <li>
                <Link to="/search" onClick={() => setIsOpen(false)}>
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Header);
