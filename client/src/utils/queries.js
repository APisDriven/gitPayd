import {gql} from "@apollo/client";

export const QUERY_WHEN = gql`
query{
  when {
    message
    timestamp
  }
}
`;