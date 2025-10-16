import { memo, useEffect } from "react";
import { CheckCircle, Users, Building2, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

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
      <h2 className="mt-[50px] text-center text-[28px]">
        {t("locationTitle")}
      </h2>
      <div className="container flex items-center justify-center">
        <div className="w-[80%] max-[570px]:w-full border-[1.5px] border-[#eee] my-[40px] rounded-[22px] shadow-lg overflow-hidden shadow-[#ddd]">
          <iframe
            src="https://www.google.com/maps?q=41.333372,69.214491&z=17&output=embed"
            width="100%"
            height="420"
            className=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default memo(Company);
