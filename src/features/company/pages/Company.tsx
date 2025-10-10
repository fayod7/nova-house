import { memo, useEffect } from "react";
import { CheckCircle, Users, Building2, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

import.meta.env.VITE_API_BASE_URL;
const Company = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f9f7f4] text-[#2d2d2d]">
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t("company.title")}</h1>
          <p className="max-w-2xl mx-auto text-lg">
            {t("company.description")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661497675847-2075003562fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlfGVufDB8fDB8fHww"
          alt="Company Workshop"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-light mb-4 ">{t("company.whoWeAre")}</h2>
          <p className="text-lg mb-6 leading-relaxed font-extralight ">
            <span className="font-medium">Nova House</span> {t("company.whoWe")}
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">{t("company.subtitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#f4f1ee] rounded-2xl hover:shadow-lg transition">
              <Building2 className="w-10 h-10 mx-auto text-[#404040] mb-4" />
              <h3 className="font-semibold mb-2">{t("company.design")}</h3>
              <p className="text-sm text-gray-600">
                {t("company.design_desc")}
              </p>
            </div>
            <div className="p-6 bg-[#f4f1ee] rounded-2xl hover:shadow-lg transition">
              <CheckCircle className="w-10 h-10 mx-auto text-[#404040] mb-4" />
              <h3 className="font-semibold mb-2">{t("company.materials")}</h3>
              <p className="text-sm text-gray-600">
                {t("company.material_desc")}
              </p>
            </div>
            <div className="p-6 bg-[#f4f1ee] rounded-2xl hover:shadow-lg transition">
              <Users className="w-10 h-10 mx-auto text-[#404040] mb-4" />
              <h3 className="font-semibold mb-2">{t("company.skilled")}</h3>
              <p className="text-sm text-gray-600">
                {t("company.skilled_desc")}
              </p>
            </div>
            <div className="p-6 bg-[#f4f1ee] rounded-2xl hover:shadow-lg transition">
              <Award className="w-10 h-10 mx-auto text-[#404040] mb-4" />
              <h3 className="font-semibold mb-2">{t("company.brand")}</h3>
              <p className="text-sm text-gray-600">{t("company.brand_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <iframe
          className="w-full h-[450px] border-0 rounded-2xl my-20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1234567890123!2d69.29600000000000!3d41.38311400000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef32709e6c6bb%3A0x1c14ce22472b80b3!2sYunusobad+Medical+Center!5e0!3m2!1sen!2suz!4v1620000000000!5m2!1sen!2suz"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default memo(Company);
