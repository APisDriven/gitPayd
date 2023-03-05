const { gql } = require("apollo-server-express");


const typeDefs = gql`
type When {
    message: String
    timestamp: String
}
type Query{
    when: When
}


type Receipt {
    receiptNo: String!
  amount: Float!
  date: String!
  from: String!
  to: String!
},
`;

module.exports = typeDefs;