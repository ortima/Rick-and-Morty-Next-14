import { gql } from "@apollo/client";

export const GET_INFO = gql`
	query {
		characters {
			info {
				count
			}
		}
		episodes {
			info {
				count
			}
		}
		locations {
			info {
				count
			}
		}
	}
`;
