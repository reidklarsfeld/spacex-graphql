import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchListDefault from './LaunchListDefault';
import './styles.css';

export interface OwnProps {
  handleIdChange: (newId?: number) => void;
};

const LaunchListContainer = ({ handleIdChange }) => {
  const { data, error, loading } = useLaunchListQuery();
  if (loading) {
    return <div className='LaunchLoad'>Loading SpaceX Launches...</div>;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <LaunchListDefault handleIdChange={handleIdChange} data={data} />;
};

export default LaunchListContainer;
