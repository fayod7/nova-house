import { memo } from 'react';
import { useTeam } from '../services/useTeam';
import TeamComp from '../components/TeamComp';

const Team = () => {
  const { getTeamMembers } = useTeam()
  const { data } = getTeamMembers()  
  return (
    <section className='w-full py-[60px] flex flex-col gap-5'>
      <div className='container'>
        <h2 className='text-3xl/[1.4] font-semibold'>Meet the Minds Behind Nova House</h2>
      <p className='w-[400px] text-lg/[1.2] text-gray-600 font-medium'>
        At Nova House, architecture is more than design — it’s the art of shaping spaces that inspire connection, creativity, and comfort. Our team blends visionary thinking with technical precision to craft environments where modern aesthetics meet human experience.
      </p>
      </div>
      <TeamComp data={data}/>
    </section>
  );
};

export default memo(Team);