import { memo } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../shared/assets/nova-logo.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1e1e1e] ">
      <div className="container grid grid-cols-3 ">
        <div className="pt-[50px]  ">
          <div className="border-l-[2px] border-l-[#fff] pl-[10px]">
            <p className="text-[#fff] text-[25px] font-extralight">
              {t("footer.title")}
            </p>
            <div>
              <input placeholder="E-Mail" type="text" name="" id="" />
              <button>SUBSCRIBER</button>
            </div>
            <p>{t("footer.description", { year })}</p>
          </div>
        </div>
        <div className="border">
          <img
            className="max-w-[300px] blobk mx-auto border"
            src={logo}
            alt=""
          />
        </div>
        <div className="pt-[50px]">
          <ul className="flex items-center gap-[20px] text-[#c9c9c9] font-extralight text-[14px]">
            <li>
              <NavLink to={"/"}>{t("footer.links.homepage")}</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>{t("footer.links.collection")}</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>{t("footer.links.team")}</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>{t("footer.links.about")}</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>{t("footer.links.contact")}</NavLink>
            </li>
          </ul>
          <p>{t("footer.location")}</p>
          <a className="block" href="mailto:info@elvemobilya.com.tr">
            info@elvemobilya.com.tr
          </a>
          <a href="tel:+998 90 651 88 18">+998 90 651 88 18</a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
