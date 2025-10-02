import { memo, useState } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import { useCategory } from '../services/useCategories';
import { useCollections } from '../services/useCollections';
import CollectionsView from '../components/CollectionsView';
import CollectionsViewEmpty from '../components/CollectionsViewEmpty';
import CollectionsViewSkeleton from '../components/CollectionsViewSkeleton';

interface ICategory {
  id: number;
  name: string;
  type: "interior" | "exterior";
  createdAt: string;
  updatedAt: string;
}

const Collections = () => {
  const [selectedInteriorId, setSelectedInteriorId] = useState<number | null>(null);
  const [selectedExteriorId, setSelectedExteriorId] = useState<number | null>(null);

  const { getCategories } = useCategory();
  const { data, isLoading: isCategoriesLoading } = getCategories();

  const { getCollections, getCollectionsById } = useCollections();
  const { data: allcollectionsData, isLoading: isCollectionsLoading } = getCollections();

  const activeCategoryId = selectedInteriorId || selectedExteriorId;
  const { data: filteredCollections, isLoading: isFilteredLoading } = getCollectionsById(activeCategoryId);

  const exteriorCategories = data?.filter((category: ICategory) => category.type === 'exterior') || [];
  const interiorCategories = data?.filter((category: ICategory) => category.type === 'interior') || [];

  const items = activeCategoryId
    ? filteredCollections?.data?.items
    : allcollectionsData?.data?.items;
  const isLoading = isCategoriesLoading || isCollectionsLoading || isFilteredLoading;
  return (
    <>
      <ReusableComp title="Collections" />
      <div className="py-16">
        <h2 className="text-3xl text-center">Collections</h2>

        <div className="flex gap-10 items-center justify-center mt-5">
          <select
            value={selectedInteriorId || ""}
            onChange={(e) => {
              setSelectedInteriorId(e.target.value ? Number(e.target.value) : null);
              setSelectedExteriorId(null);
            }}
            className="border py-3.5 px-10"
          >
            <option value="">All Interiors</option>
            {interiorCategories.map((cat: ICategory) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={selectedExteriorId || ""}
            onChange={(e) => {
              setSelectedExteriorId(e.target.value ? Number(e.target.value) : null);
              setSelectedInteriorId(null);
            }}
            className="border py-3.5 px-10"
          >
            <option value="">All Exteriors</option>
            {exteriorCategories.map((cat: ICategory) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
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
