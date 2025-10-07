import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../shared/assets/nova-logo.svg";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { Facebook, Instagram } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {

  const [clean, setClean] = useState<string>("");
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = {
      email: clean,
    };
    console.log(message);

    setClean("");
  };
  return (
    <footer className="bg-[#1e1e1e] pb-50px">
      <div
        className="container grid grid-cols-3 gap-[20px] max-[1060px]:grid-cols-2 
      max-[600px]:grid-cols-1"
      >
        <div className="pt-[50px]  ">
          <div className="border-l-[2px] border-l-[#fff] pl-[10px] flex flex-col h-[80%] ">
            <p className="text-[#fff] text-[25px] font-extralight">
              {t("footer.title")}
            </p>
            <div className="">
              <form
                onSubmit={handleSubmit}
                action=""
                className="border-b border-b-[#b4b4b4] flex items-center gap-[12px] justify-between px-[12px] mt-[24px] py-[12px]"
              >
                <input
                  value={clean}
                  onChange={(e) => setClean(e.target.value)}
                  className="placeholder:text-[#c5c5c5] text-[13px] text-[#c5c5c5] outline-0 flex-1"
                  placeholder="E-Mail"
                  type="email"
                  required
                  name=""
                  id=""
                />
                <button className="text-[14px] text-[#c5c5c5]">
                  {t("footer.button.subscribe")}
                </button>
              </form>
            </div>
            <p className="mt-auto text-[#ababab] font-extralight text-[13px]">
              {t("footer.description", { year })}
            </p>
          </div>
        </div>

        <div className="boder">
          <img className="max-w-[300px] blobk mx-auto max-[600px]:max-w-[200px]" src={logo} alt="" />
          
        </div>
        <div className="pt-[50px] max-[1060px]:col-span-2 max-[600px]:col-span-1 max-[600px]:pt-[0]">
          <ul className="flex items-center max-[1060px]:justify-center gap-[20px] text-[#c9c9c9] font-extralight text-[14px] ">
            <li>
              <NavLink className={"link"} to={"/"}>
                {t("footer.links.homepage")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/collections"}>
                {t("footer.links.collection")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/team"}>
                {t("footer.links.team")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/about"}>
                {t("footer.links.about")}
              </NavLink>
            </li>
            <li>
              <NavLink className={"link"} to={"/contact"}>
                {t("footer.links.contact")}
              </NavLink>
            </li>
          </ul>
          <p className="text-[#909090] max-[1060px]:text-center ml-[10px] mt-[20px] text-[13px] mb-[12px] ">
            {t("footer.location")}
          </p>
          <a
            className="block text-[12px] mb-[6px] text-[#909090] max-[1060px]:text-center text-end"
            href="mailto:info@elvemobilya.com.tr"
          >
            info@elvemobilya.com.tr
          </a>
          <a
            className="number-tel block text-[#909090] max-[1060px]:text-center  text-end text-[12px] "
            href="tel:+998 90 651 88 18"
          >
            +998 90 651 88 18
          </a>
          <div className="text-[#c9c9c9] flex items-center justify-end mt-[20px] gap-[14px] max-[1060px]:justify-center max-[1060px]:mb-[50px]">
            <Facebook />
            <Instagram />
            <FaPinterestP className="text-[22px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
