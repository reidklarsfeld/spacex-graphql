import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';
import './styles.css';

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();
  if (loading) {
    return <div className='launchload'>Loading SpaceX Launches...</div>;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <LaunchList data={data} />;
};
export default LaunchListContainer;