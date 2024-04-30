import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        episode
        name
        air_date
      }
    }
  }
`;

export default GET_CHARACTER;
