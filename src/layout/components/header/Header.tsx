import { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../../shared/assets/nova-logo.png";
import LanguageSelect from "./LanguageSelect";

const Header = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full sticky top-0 shadow-lg  text-[#c9c9c9] z-[99] transition-all duration-300
        ${isScroll ? "  bg-[#1e1e1e]" : "  bg-[#292929]"}`}
      >
        <nav
          className={`container flex items-center justify-between relative duration-150  ${
            isScroll ? "min-h-[70px]" : " min-h-[80px]"
          }`}
        >
          <ul
            className={`hidden md:flex gap-4 items-center transition-all duration-300 ${
              isScroll ? "text-sm" : "text-[16px]"
            }`}
          >
            <li>
              <NavLink className="header__link" to="/">
                {t("header.home")}
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="/collections">
                {t("header.collection")}
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="/team">
                {t("header.team")}
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="/about">
                {t("header.about")}
              </NavLink>
            </li>
          </ul>

          <Link
            to="/"
            className="transition-all  absolute  left-[50%] translate-x-[-50%]    duration-300 flex flex-col items-center text-[#c9c9c9]"
          >
            <img
              src={logo}
              alt="Nova House logo"
              className={`mx-auto transition-all duration-300 ${
                isScroll ? "w-[55px]" : "w-[60px]"
              }`}
            />
            <span
              className={`font-light uppercase font-serif transition-all duration-300 ${
                isScroll ? "text-[16]" : "text-[16px]"
              }`}
            >
              Nova House
            </span>
          </Link>
          <ul
            className={`hidden md:flex gap-4 items-center transition-all duration-300 ${
              isScroll ? "text-sm" : "text-[16px]"
            }`}
          >
            <li>
              <NavLink className="header__link" to="/company">
                {t("header.company")}
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="/contact">
                {t("header.contact")}
              </NavLink>
            </li>
            <li>
              <LanguageSelect />
            </li>
            <li>
              <NavLink to="/search">
                <Search
                  className={`transition-all duration-300 ${
                    isScroll ? "size-[20px]" : "size-[25px]"
                  }`}
                />
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <LanguageSelect />
          </div>
        
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[98] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[250px] h-screen bg-white text-black z-[99]
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
          {[
            { to: "/", label: "home" },
            { to: "/collections", label: "collection" },
            { to: "/team", label: "team" },
            { to: "/contact", label: "contact" },
            { to: "/about", label: "about" },
            { to: "/company", label: "company" },
            { to: "/search", label: "search" },
          ].map(({ to, label }) => (
            <li key={label}>
              <Link to={to} onClick={() => setIsOpen(false)}>
                {t(`header.${label}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(Header);
