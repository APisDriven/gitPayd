import gql from "graphql-tag";

export const QUERY_WHERE = gql`
query{
  where {
    message
    timestamp
  }
}
`;