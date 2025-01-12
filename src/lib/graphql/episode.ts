import { gql } from "@apollo/client";

export const GET_EPISODE = gql`
	query getEpisode($id: ID!) {
		episode(id: $id) {
			id
			name
			air_date
			episode
			characters {
				id
				name
				status
				species
				image
				type
				gender
				location {
					name
				}
			}
		}
	}
`;
