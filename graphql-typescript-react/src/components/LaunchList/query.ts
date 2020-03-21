import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
    query LaunchList {
        launches {
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