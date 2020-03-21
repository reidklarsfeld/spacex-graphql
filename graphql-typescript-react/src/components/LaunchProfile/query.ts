import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
    query LaunchListYear ($launch_year: String!) {
        launches(find: {launch_year: $launch_year}) {
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

    query LaunchListMissionName ($mission_name: String!) {
        launches(find: {mission_name: $mission_name}) {
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

    query LaunchListRocketName ($rocket_name: String!) {
        launches(find: {rocket_name: $rocket_name}) {
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