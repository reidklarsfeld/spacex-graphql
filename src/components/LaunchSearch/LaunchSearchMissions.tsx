import React, { useState } from 'react';
import { MissionsNamesQuery, useLaunchListMissionNameQuery } from '../../generated/graphql';
import LaunchListMissionName from '../LaunchList/LaunchListMissionName';
import './styles.css';

interface Props {
  data: MissionsNamesQuery;
  handleIdChange: (newId?: number) => void;
};

const className = 'LaunchListMissionName';

const LaunchSearchMissions: React.FC<Props> = ({ data, handleIdChange }) => {
  const [selected, setSelected] = useState('FalconSat')
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
          {data.launches && data.launches.map((mission, i) => 
            <option key={i} value={mission && mission.mission_name} >
              {mission && mission.mission_name}
            </option>
          )}
        </select>
        <LaunchListMissionName handleIdChange={handleIdChange} data={nameData} />
      </div>
    </div>
  );
};

export default LaunchSearchMissions;