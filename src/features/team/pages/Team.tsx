import { memo } from 'react';
import { useTeam } from '../services/useTeam';
import TeamComp from '../components/TeamComp';

const Team = () => {
  const { getTeamMembers } = useTeam()
  const { data } = getTeamMembers()  
  return (
    <section className='w-full py-[60px]'>
      <TeamComp data={data}/>
    </section>
  );
};

export default memo(Team);