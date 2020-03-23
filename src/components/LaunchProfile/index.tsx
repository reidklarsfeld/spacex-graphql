import React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

//need to create TypeScript OwnProps of id to pass id prop from App parent component
interface OwnProps {
    id?: string;
  }

const LaunchProfileContainer = ({id}: OwnProps) => {
  const { data, error, loading } = useLaunchProfileQuery(
    { variables: { id: String(id) } }
  );

  if (loading) {
    return <div className='ProfileLoad'>Loading...</div>;
  }
  if (error) {
    return <div>ERROR</div>;
  }
  if (!data) {
    return <div>Select a flight from the panel</div>;
  }
  return <LaunchProfile data={data} />;
};
export default LaunchProfileContainer;