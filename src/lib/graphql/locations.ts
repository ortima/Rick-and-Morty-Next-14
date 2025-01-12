import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
	query getLocations($page: Int, $filter: FilterLocation) {
		locations(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				dimension
				type
				residents {
					id
					name
				}
			}
		}
	}
`;
