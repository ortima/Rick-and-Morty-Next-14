import { gql } from "@apollo/client";

const GET_CHARACTERS_INFO = gql`
  query {
    characters {
      info {
        count
        pages
      }
    }
  }
`;

export default GET_CHARACTERS_INFO;
