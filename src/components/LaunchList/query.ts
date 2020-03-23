import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches(sort: "launch_date_local") {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      links {
        video_link
      }
    }
  }
`;

export const QUERY_LAUNCH_LIST_YEAR = gql`
  query LaunchListYear ($launch_year: String!) {
    launches(find: {launch_year: $launch_year}, sort: "launch_date_local") {
      id
      mission_name
      rocket {
        rocket_name
      }   
      launch_date_local
      links {
        video_link
      }
    }
  }
`;

export const QUERY_LAUNCH_LIST_MISSION_NAME = gql`
  query LaunchListMissionName ($mission_name: String!) {
    launches(find: {mission_name: $mission_name}) {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      links {
        video_link
      }
    }
  }
`;

export const QUERY_LAUNCH_ROCKET_NAME = gql`
  query LaunchListRocketName ($rocket_name: String!) {
    launches(find: {rocket_name: $rocket_name}) {
      id
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      links {
        video_link
      }
    }
  }
`;
