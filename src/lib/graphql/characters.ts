import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
	query getCharacters($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				prev
				next
			}
			results {
				id
				name
				status
				species
				type
				gender
				image
				location {
					name
				}
			}
		}
	}
`;
