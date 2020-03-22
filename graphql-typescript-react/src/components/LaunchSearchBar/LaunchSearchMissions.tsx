import React, { useState } from 'react';
import { MissionsNamesQuery, useLaunchListMissionNameQuery } from '../../generated/graphql';
import LaunchListMissionName from '../LaunchList/LaunchListMissionName'
import './styles.css';

interface Props {
  data: MissionsNamesQuery;
};

const className = 'LaunchListMissionName';

const LaunchSearchMissions: React.FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState('Thaicom')
  const handleChange = React.useCallback(e => {
    return setSelected(e.target.value)
  }, []);

    const { data: nameData } = useLaunchListMissionNameQuery(
      {variables: { mission_name: selected }}
    );

  if (!data) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
        <div className={`${className}__status`}>
            <select className='missionsearch' onChange={handleChange}>
                {data.missions && data.missions.map((mission, i) => 
                    <option key={i} value={mission && mission.name} >
                        {mission && mission.name}
                    </option>
                )}
            </select>
            <LaunchListMissionName data={nameData} />
        </div>
    </div>
  );
};

export default LaunchSearchMissions;