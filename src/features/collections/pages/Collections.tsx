import { memo, useState } from 'react';
import ReusableComp from '../../../layout/components/reusable-comp/ReusableComp';
import { useCategory } from '../services/useCategories';
import { useCollections } from '../services/useCollections';
import CollectionsView from '../components/CollectionsView';
import CollectionsViewEmpty from '../components/CollectionsViewEmpty';

interface ICategory {
  id: number;
  name: string;
  type: "interior" | "exterior";
  createdAt: string;
  updatedAt: string;
}

const Collections = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const { getCategories } = useCategory();
  const { data } = getCategories();

  const { getCollections, getCollectionsById } = useCollections();
  const { data: allcollectionsData } = getCollections();
  const { data: filteredCollections } = getCollectionsById(selectedCategoryId)

  const exteriorCategories = data?.filter((category: ICategory) => category.type === 'exterior') || [];
    const interiorCategories = data?.filter((category: ICategory) => category.type === 'interior') || [];
  const items = selectedCategoryId
  ? filteredCollections?.data?.items
  : allcollectionsData?.data?.items;
  return (
    <>
      <ReusableComp title="Collections" />
    <div className="py-16">
        <h2 className="text-3xl text-center">Collections</h2>

        <div className="flex gap-10 items-center justify-center mt-5">
          <select
            value={selectedCategoryId || ""}
            onChange={(e) =>
              setSelectedCategoryId(e.target.value ? Number(e.target.value) : null)
            }
            className="border py-3.5 px-10"
          >
            <option value="">All Collections</option>
            {exteriorCategories.map((cat:ICategory) => (
              <option key={cat.id} value={cat.id}>
                {cat.name} (Exterior)
              </option>
            ))}
            {interiorCategories.map((cat:ICategory) => (
              <option key={cat.id} value={cat.id}>
                {cat.name} (Interior)
              </option>
            ))}
          </select>
        </div>
      </div>

       {items && items.length > 0 ? (
      <CollectionsView data={items} />
    ) : (
      <CollectionsViewEmpty />
    )}

    </>
  );
};

export default memo(Collections);
