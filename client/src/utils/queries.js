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
query Receipts {
  receipts {
    _id
    email
    receipts {
      amount
      business
      date
      email
      receiptNumber
    }
  }
}
`