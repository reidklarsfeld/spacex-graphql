import gql from 'graphql-tag';

export const QUERY_LAUNCH_SEARCH = gql`
  query RocketsNames {
    rockets {
      name
    }
  }

  # sort option is to ensure order is chronological
  query MissionsNames {
    launches(sort: "launch_date_local") {
      mission_name 
      }
    }
`;