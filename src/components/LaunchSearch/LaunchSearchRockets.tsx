import React, { useState, useCallback } from 'react';
import { RocketsNamesQuery, useLaunchListRocketNameQuery } from '../../generated/graphql';
import LaunchListRocketName from '../LaunchList/LaunchListRocketName';
import './styles.css';

interface Props {
  data: RocketsNamesQuery;
  handleIdChange: (newId?: number) => void;
}

const className = 'LaunchListSearch';

const LaunchSearchRockets: React.FC<Props> = ({ data, handleIdChange }) => {
  const [selected, setSelected] = useState('Falcon 1');

  const handleChange = useCallback(e => {
    return setSelected(e.target.value)
  }, []);

  const { data: rocketData } = useLaunchListRocketNameQuery(
    {variables: { rocket_name : selected }}
  );

  if (!data) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <select className='search' onChange={handleChange}>
          {data.rockets && data.rockets.map((rocket, i) => 
            <option key={i} value={rocket && rocket.name}>
                {rocket && rocket.name}
            </option>
            )}
        </select>
      </div>
      <LaunchListRocketName handleIdChange={handleIdChange} data={rocketData} />
    </div>
  );
};

export default LaunchSearchRockets;