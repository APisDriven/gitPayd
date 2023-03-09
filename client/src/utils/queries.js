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

export const RECEIPTS = gql`
query Query {
  receipts {
    _id
    email
    receipts {
      amount
      date
      email
      from
      receiptNumber
      to
    }
  }
}
`