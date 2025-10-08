import { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../../shared/assets/nova-logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Language Bar --- */}
      <div
        className={`w-full sticky top-0 left-0 z-[100] text-white bg-[#000] py-2 transition-transform duration-200 ${
          isScroll ? "translate-y-[-36px]" : "translate-y-0"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            {["uz", "en", "ru"].map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className="font-semibold cursor-pointer uppercase"
              >
                {lng}
              </button>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`w-full text-[#c9c9c9] z-[99] transition-all duration-300
        ${
          isScroll
            ? "fixed top-0 bg-[#1e1e1e] shadow-lg"
            : "sticky top-[36px] bg-[#000000bf]"
        }`}
      >
        <nav className="container flex items-center justify-between py-2">
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
          </ul>

          <Link
            to="/"
            className="transition-all duration-300 flex flex-col items-center text-[#c9c9c9]"
          >
            <img
              src={logo}
              alt="Nova House logo"
              className={`transition-all duration-300 ${
                isScroll ? "w-[50px]" : "w-[75px]"
              }`}
            />
            <span
              className={`font-light uppercase font-serif transition-all duration-300 ${
                isScroll ? "text-sm" : "text-[20px]"
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
              <NavLink className="header__link" to="/about">
                {t("header.about")}
              </NavLink>
            </li>
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
              <NavLink to="/search">
                <Search
                  className={`transition-all duration-300 ${
                    isScroll ? "size-[20px]" : "size-[25px]"
                  }`}
                />
              </NavLink>
            </li>
          </ul>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
