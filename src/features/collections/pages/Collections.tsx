import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReusableComp from "../../../layout/components/reusable-comp/ReusableComp";
import { useCategory } from "../services/useCategories";
import { useCollections } from "../services/useCollections";
import CollectionsView from "../components/CollectionsView";
import CollectionsViewEmpty from "../components/CollectionsViewEmpty";
import CollectionsViewSkeleton from "../components/CollectionsViewSkeleton";
import ReusableDropdown from "../../../layout/components/reuseable-dropdown/ReusableDropdown";
import { useTranslation } from "react-i18next";

const Collections = () => {
  const {t} = useTranslation()
  const [params, setParams] = useSearchParams();
  const { getCategories, getCollectionCategories } = useCategory();
  const { getCollections } = useCollections();
  console.log(params);
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 }, []);
  

  const [selectedInteriorId, setSelectedInteriorId] = useState<number | null>(null);
  const [selectedExteriorId, setSelectedExteriorId] = useState<number | null>(null);

  const activeCategoryId = selectedInteriorId || selectedExteriorId;

  const { data: categoriesData, isLoading: isCategoriesLoading } = getCategories();

const categories = Array.isArray(categoriesData) 
  ? categoriesData 
  : categoriesData?.data || [];

const interiorCategories = categories
  .filter((c:any) => c.type === "interior")
  .map((c:any) => ({ label: c.name, value: c.id }));

const exteriorCategories = categories
  .filter((c:any) => c.type === "exterior")
  .map((c:any) => ({ label: c.name, value: c.id }));

  const { data: allCollectionsData, isLoading: isCollectionsLoading } =
    getCollections(!activeCategoryId);
  const { data: filteredCollections, isLoading: isFilteredLoading } =
    getCollectionCategories(activeCategoryId);

  const items = activeCategoryId
    ? filteredCollections?.data?.items
    : allCollectionsData?.data?.items;

  const isLoading =
    isCategoriesLoading || isCollectionsLoading || isFilteredLoading;

  const handleSelect = (type: "interior" | "exterior", value: number | null) => {
    if (type === "interior") {
      setSelectedInteriorId(value);
      setSelectedExteriorId(null);
    } else {
      setSelectedExteriorId(value);
      setSelectedInteriorId(null);
    }

    if (value) setParams({ category: String(value), type });
    else setParams({});
  };

  return (
    <>
      <ReusableComp title={t("reusable.collections")} />
      <div className="py-16">
        <h2 className="text-3xl text-center">{t("reusable.collections")}</h2>

        <div className="flex gap-10 items-center justify-center mt-5">
          <ReusableDropdown
            label="Interiors"
            options={interiorCategories}
            selected={selectedInteriorId}
            onSelect={(val) => handleSelect("interior", val ? Number(val) : null)}
            allLabel="All Interiors"
          />

          <ReusableDropdown
            label="Exteriors"
            options={exteriorCategories}
            selected={selectedExteriorId}
            onSelect={(val:any) => handleSelect("exterior", val)}
            allLabel="All Exteriors"
          />
        </div>
      </div>

      {isLoading ? (
        <CollectionsViewSkeleton />
      ) : items && items.length > 0 ? (
        <CollectionsView data={items} />
      ) : (
        <CollectionsViewEmpty />
      )}
    </>
  );
};

export default memo(Collections);
