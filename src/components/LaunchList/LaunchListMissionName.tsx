import React from 'react';
import { LaunchListRocketNameQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: LaunchListRocketNameQuery;
  handleIdChange: (newId?: number) => void;
}

const className = 'LaunchList';

const LaunchListMissionName: React.FC<Props> = ({ data, handleIdChange }) => {
  return (
  <div className={className}>
    {!data
      ? <div>Loading...</div>
      :
      <div>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map((launch, i) => 
            !!launch && (
              <li key={i} 
              className={`${className}__item`}
              onClick={() => handleIdChange(Number(launch.id))}>
                Mission Name: {launch.mission_name} 
                <br/>
                Rocket Name: {launch.rocket && launch.rocket.rocket_name}
                <br/>
                Launch Date: {launch.launch_date_local && launch.launch_date_local.slice(0,10)}
                <br/>
                Video Link: {launch.links && launch.links.video_link === null ? 'There is currently no video link' : <a rel="noopener noreferrer" target='_blank' href={launch.links && launch.links.video_link}>{launch.links && launch.links.video_link}</a>}
              </li>
            ),
        )}
      </ol>
    </div>
    }
  </div>       
  )
};

export default LaunchListMissionName;