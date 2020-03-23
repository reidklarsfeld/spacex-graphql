import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
    query LaunchProfile($id: ID!) {
        launch(id: $id) {
            mission_name
            launch_date_local
            launch_success
            rocket {
                rocket_name
            }
            links {
                video_link
                flickr_images
                mission_patch
                wikipedia
            }
            details
        }
    }
`
