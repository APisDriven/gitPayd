const { gql } = require("apollo-server-express");


const typeDefs = gql`

type Query{
    me: User,
    receipts: User,
    when: When
}

type Receipt {
    receiptNumber: String!
    amount: Int!
    date: String!
    from: String,
    to: String,
    email: String!
}

type When {
  message: String,
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
    amount: Int!
    date: String!
    from: String,
    to: String,
    email: String!
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveReceipt(input: SavedReceiptInput): User
    removeReceipt(receiptNumber: String!): User
}

`;

module.exports = typeDefs;