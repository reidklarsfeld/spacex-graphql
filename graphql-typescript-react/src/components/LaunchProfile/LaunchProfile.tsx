import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: LaunchProfileQuery;
};

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }
  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>Flight: </span>
        {data.launch.launch_success ? (
          <span className={`${className}__success`}>Success</span>
        ) : (
          <span className={`${className}__failed`}>Failed</span>
        )}
        <img alt='mission patch' className='patch' src={data.launch.links.mission_patch}/>
      </div>
      <h1 className={`${className}__title`}>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name})`}
      </h1>
      <p className={`${className}__description`}>{data.launch.details}</p>
      <a target='_blank' rel="noopener noreferrer" href={data.launch.links.wikipedia}>{data.launch.links.wikipedia}</a>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className={`${className}__image-list`}>
          {data.launch.links.flickr_images.map(image =>
            image ? <img alt={data.launch.mission_name + ' launch image'} src={image} className={`${className}__image`} key={image} /> : null,
          )}
        </div>
      )}
    </div>
  );
};
export default LaunchProfile;