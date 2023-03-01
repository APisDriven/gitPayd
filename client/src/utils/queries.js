import {gql} from "@apollo/client";

export const QUERY_WHERE = gql`
query{
  where {
    message
    timestamp
  }
}
`;