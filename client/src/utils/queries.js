import gql from "graphql-tag";

export const QUERY_WHEN = gql`
query{
  when {
    message
    timestamp
  }
}
`;