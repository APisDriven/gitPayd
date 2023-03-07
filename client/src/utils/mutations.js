import gql from "graphql-tag";

export const loginUser = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const addOneUser = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const saveReceipt = gql`
  mutation saveReceipt($input: SavedReceiptInput) {
    saveReceipt(input: $input) {
      username
      _id
      receipts {
        receiptNumber
        amount
        date
        business
        signature
      }
    }
  }
`;

export const removeReceipt = gql`
  mutation removeReceipt($receiptNumber: String!) {
    removeReceipt(receiptNumber: $receiptNumber) {
      _id
      username
      receipts {
        receiptNumber
        amount
        date
        business
      }
    }
  }
`;
