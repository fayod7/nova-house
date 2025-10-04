import { memo } from "react";
import { useTranslation } from "react-i18next";

const Text = () => {
  const { t } = useTranslation();
  return (
    <section className="my-[100px]">
      <div className="container">
        <h2 className="text-center text-[30px] font-light">
          {" "}
          {t("collection")}
        </h2>
        <p className="text-center font-extralight mt-[12px]">
          {t("collection_text")}
        </p>
      </div>
    </section>
  );
};

export default memo(Text);
