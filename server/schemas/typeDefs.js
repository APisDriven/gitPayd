const { gql } = require("apollo-server-express");


const typeDefs = gql`

type When {
    message: String
    timestamp: String
}

type Query{
    when: When
}

type User {
    _id: ID
    username: String!
    email: String!
    receipts: [Receipt]
  }

type Auth {
    token: ID!
    user: User
  }

  input SavedReceiptInput {
    receiptNumber: String!
    amount: Float!
    date: String!
    from: String!
    to: String!
    email: String!,
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveReceipt(input: SavedReceiptInput): User
    removeReceipt(receiptNumber: String!): User
}
  
`;

module.exports = typeDefs;