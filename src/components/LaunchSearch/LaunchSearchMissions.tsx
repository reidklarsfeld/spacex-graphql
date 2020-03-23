import React, { useState, useCallback } from 'react';
import { MissionsNamesQuery, useLaunchListMissionNameQuery } from '../../generated/graphql';
import LaunchListMissionName from '../LaunchList/LaunchListMissionName';
import './styles.css';

//add handleIdChange Prop to accept function from parent component
interface Props {
  data: MissionsNamesQuery;
  handleIdChange: (newId?: number) => void;
};

const className = 'LaunchListSearch';

const LaunchSearchMissions: React.FC<Props> = ({ data, handleIdChange }) => {
  const [selected, setSelected] = useState('FalconSat');

  const handleChange = useCallback(e => {
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
        <select className='search' onChange={handleChange}>
          {data.launches && data.launches.map((mission, i) => 
            <option key={i} value={mission && mission.mission_name} >
              {mission && mission.mission_name}
            </option>
          )}
        </select>
      </div>
      <LaunchListMissionName handleIdChange={handleIdChange} data={nameData} />
    </div>
  );
};

export default LaunchSearchMissions;