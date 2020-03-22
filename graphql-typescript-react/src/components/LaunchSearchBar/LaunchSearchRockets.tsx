import React, { useState } from 'react';
import { RocketsNamesQuery, useLaunchListRocketNameQuery } from '../../generated/graphql';
import LaunchListRocketName from '../LaunchList/LaunchListRocketName'
import './styles.css';

interface Props {
  data: RocketsNamesQuery;
}
const className = 'LaunchListRocketName';

const LaunchSearchRockets: React.FC<Props> = ({ data }) => {
  const [selected, setSelected ] = useState('Falcon 1')
  const handleChange = React.useCallback(e => {
    return setSelected(e.target.value)
  }, []);
  console.log(selected)

  const { data: rocketData } = useLaunchListRocketNameQuery(
    {variables: { rocket_name : selected }}
  );

  if (!data) {
    return <div>No launch available</div>;
  }
  return (
    <div className={className}>
        <div className={`${className}__status`}>
            <select className='rocketsearch' onChange={handleChange}>
                {data.rockets && data.rockets.map((rocket, i) => 
                    <option key={i} value={rocket && rocket.name}>
                        {rocket && rocket.name}
                    </option>
                )}
            </select>
            <LaunchListRocketName data={rocketData} />
        </div>
    </div>
  );
};

export default LaunchSearchRockets;