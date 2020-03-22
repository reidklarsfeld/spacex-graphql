import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
    query RocketsNames {
        rockets {
            name
        }
    }

    query MissionsNames {
        missions {
            name
        }
    }
`;