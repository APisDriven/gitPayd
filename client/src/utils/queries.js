import gql from "graphql-tag";

export const QUERY_WHEN = gql`
query{
  when {
    message
  }
}
`;

export const ME = gql`
  query Me {
    me {
      username
      email
    }
  }
`

export const Receipts = gql`
  query Recepits {
    receipts {
      username
    }   
  }
`