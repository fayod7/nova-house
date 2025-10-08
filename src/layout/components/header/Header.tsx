import { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../../shared/assets/nova-logo.png";
const Header = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
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
      <div
        className={`w-full fixed top-0 left-0 z-100 text-white bg-[#000]  py-2 duration-100 ${
          isScroll ? "  translate-y-[-36px]" : " translate-y-[0px]"
        }`}
      >
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
        </div>
      </div>
      <header
        className={`w-full text-[#c9c9c9]   fixed left-0 z-100 transition-all duration-100
          ${isScroll ? " bg-[#1e1e1e] top-[0]" : "bg-[#000000bf]  top-[36px]"}`}
      >
        <nav className="container flex items-center justify-between">
          <ul
            className={`gap-4 items-center hidden md:flex transition-all duration-300
            ${isScroll ? "text-sm" : "text-[16px]"}`}
          >
            <li>
              <NavLink className={"header__link"} to={"/"}>
                {t("header.home")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"} to={"/collections"}>
                {t("header.collection")}
              </NavLink>
            </li>

            <li>
              <NavLink className={"header__link"} to={"/team"}>
                {t("header.team")}
              </NavLink>
            </li>
          </ul>

          <Link
            to={"/"}
            className="transition-all duration-300 flex flex-col items-center text-[#c9c9c9]"
          >
            <img
              src={logo}
              alt=""
              className={`${
                isScroll ? "w-[50px]" : "w-[75px]"
              } transition-all duration-300 bg-transparent`}
            />
            <span
              className={`font-light uppercase font-serif ${
                isScroll ? "text-sm" : "text-[20px]"
              }`}
            >
              Nova House
            </span>
          </Link>

          <ul
            className={`gap-4 items-center hidden md:flex transition-all duration-300
            ${isScroll ? "text-sm" : "text-[16px]"}`}
          >
            <li>
              <NavLink className={"header__link"} to={"/about"}>
                {t("header.about")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"} to={"/company"}>
                {t("header.company")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"} to={"/contact"}>
                {t("header.contact")}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/search"}>
                <Search
                  className={`transition-all duration-300 ${
                    isScroll ? "size-[20px]" : "size-[25px]"
                  }`}
                />
              </NavLink>
            </li>
          </ul>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </header>

      <>
        <div
          className={`fixed inset-0 z-[999] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 w-[250px] h-screen bg-white text-black z-[1000] 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-4 p-6 text-lg">
            <li
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              Close <X className="w-7 h-7" />
            </li>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                {t("header.home")}
              </Link>
            </li>
            <li>
              <Link to="/collections" onClick={() => setIsOpen(false)}>
                {t("header.collection")}
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setIsOpen(false)}>
                {t("header.team")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                {t("header.contact")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                {t("header.about")}
              </Link>
            </li>
            <li>
              <Link to="/company" onClick={() => setIsOpen(false)}>
                {t("header.company")}
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={() => setIsOpen(false)}>
                {t("header.search")}
              </Link>
            </li>
          </ul>
        </div>
      </>
    </>
  );
};

export default memo(Header);
