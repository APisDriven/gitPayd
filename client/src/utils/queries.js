import gql from "graphql-tag";

export const QUERY_WHEN = gql`
query{
  when {
    message
    timestamp
  }
}
`;

export const ME = gql`
  query {
    me {
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;