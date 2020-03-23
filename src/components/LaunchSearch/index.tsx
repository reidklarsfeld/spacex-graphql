import React, { useState } from 'react';
import { useRocketsNamesQuery, useMissionsNamesQuery } from '../../generated/graphql';
import LaunchSearchRockets from './LaunchSearchRockets';
import LaunchSearchMissions from './LaunchSearchMissions';
import LaunchSearchYears from './LaunchSearchYears';
import LaunchListDefault from '../LaunchList';

const LaunchSearchContainer = ({ handleIdChange }) => {
  const [searchParam, setSearchParam] = useState('Default');
  const { data: rocketNameData, error: errorRocketNameData, loading: loadingRocketNameData} = useRocketsNamesQuery();
  const { data: missionNameData, error: errorMissionNameData, loading: loadingMissionNameData} = useMissionsNamesQuery();

  let className = 'LaunchSearchContainer';
    
  if (loadingRocketNameData || loadingMissionNameData) {
    return <div>Loading Search Parameters...</div>;
  }

  if (errorRocketNameData || errorMissionNameData) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <div className={className}>
        <div className={`${className}__status`}>
          Search By:
          <label>
            <input
              type="radio"
              name='search-choice'
              value='rocket name' 
              className='searchChoice'
              defaultChecked
              onClick={()=> setSearchParam('Default')}
            />
            Default
          </label>
          <label>
            <input
              type="radio"
              name='search-choice'
              value='rocket name' 
              className='searchChoice'
              onClick={()=> setSearchParam('Mission Names')}
            />
            Mission Name
          </label>
          <label>
            <input
              type="radio"
              name='search-choice'
              value='mission name'
              className='searchChoice' 
              onClick={()=> setSearchParam('Rocket Names')}
            />
            Rocket Name
          </label>
          <label>
            <input
              type="radio"
              name='search-choice'
              value='launch year' 
              className='searchChoice'
              onClick={()=> setSearchParam('Launch Years')}
            />
            Launch Year
          </label>
          <br/>
          {searchParam === 'Rocket Names' &&
          <LaunchSearchRockets handleIdChange={ handleIdChange } data={rocketNameData} />
          }
          {searchParam === 'Mission Names' &&
          <LaunchSearchMissions handleIdChange={ handleIdChange } data={missionNameData} />
          }
          {searchParam === 'Launch Years' &&
          <LaunchSearchYears handleIdChange={ handleIdChange } />
          }
          {searchParam === 'Default' &&
          <LaunchListDefault handleIdChange={ handleIdChange }/>
          }
        </div>
      </div>
    </div>
  )
};

export default LaunchSearchContainer;
