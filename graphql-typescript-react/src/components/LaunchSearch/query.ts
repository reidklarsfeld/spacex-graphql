import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
    query RocketsNames {
        rockets {
            name
        }
    }

    query MissionsNames {
        launches(sort: "launch_date_local") {
            mission_name 
        }
    }
`;