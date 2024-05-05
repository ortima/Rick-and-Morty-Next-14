import { gql } from "@apollo/client";

const GET_INFO = gql`
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

export default GET_INFO;
