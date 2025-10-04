import { memo, useState } from 'react';
import CollectionsView from '../../collections/components/CollectionsView';
import { useSearch } from '../services/useSearch';
import useDebounce from '../../../shared/hooks/useDebounce';
import CollectionsViewSkeleton from '../../collections/components/CollectionsViewSkeleton';

const Search = () => {
  const [value, setValue] = useState<string>('')
     const { getCollectionsBySearch } = useSearch()
     const debouncedValue = useDebounce(value)
     const { data, isLoading } = getCollectionsBySearch({query: debouncedValue})
    if( isLoading ) {
      return <CollectionsViewSkeleton/>
    }
     
  return (
    <div className='bg-white pb-[170px] flex-col flex gap-6'>
      <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Search for collections'
      className='py-[30px] text-center border-b border-slate-300 outline-none text-[40px] w-full placeholder:text-slate-900'
      type="text" />
      <h2 className='text-center text-gray-500 text-lg'>Start typing to see collections you are looking for.</h2>
      <CollectionsView data={data?.data?.items}/> 
    </div>
  );
};

export default memo(Search);